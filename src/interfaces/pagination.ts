export type IPaginationOptions = {
  page?: number;
  limit?: number;
  sortBy?: string; // Change sortBy to string to represent the field to sort by
  sortOrder?: 'asc' | 'desc'; // Add sortOrder for ascending or descending order
};
