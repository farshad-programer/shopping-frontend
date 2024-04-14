import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../app/api/apiSlice";

const categorysAdapter = createEntityAdapter({});

const initialState = categorysAdapter.getInitialState();

export const categorysApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategorys: builder.query({
      query: () => "/auth/category",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        const loadedCategorys = responseData.data.categoryList.map(
          (category) => {
            category.id = category._id;
            return category;
          }
        );
        return categorysAdapter.setAll(initialState, loadedCategorys);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Category", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Category", id })),
          ];
        } else return [{ type: "Category", id: "LIST" }];
      },
    }),
    addNewCategory: builder.mutation({
      query: (initialCategoryData) => ({
        url: "/categorys",
        method: "POST",
        body: {
          ...initialCategoryData,
        },
      }),
      invalidatesTags: [{ type: "Category", id: "LIST" }],
    }),
    updateCategory: builder.mutation({
      query: (initialCategoryData) => ({
        url: "/categorys",
        method: "PATCH",
        body: {
          ...initialCategoryData,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Category", id: arg.id },
      ],
    }),
    deleteCategory: builder.mutation({
      query: ({ id }) => ({
        url: `/auth/category/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Category", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetCategorysQuery,
  useAddNewCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categorysApiSlice;

// returns the query result object
export const selectCategorysResult =
  categorysApiSlice.endpoints.getCategorys.select();

// creates memoized selector
const selectCategorysData = createSelector(
  selectCategorysResult,
  (categorysResult) => categorysResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllCategorys,
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
  // Pass in a selector that returns the categorys slice of state
} = categorysAdapter.getSelectors(
  (state) => selectCategorysData(state) ?? initialState
);
