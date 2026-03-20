/** Represents a standard paginated API response envelope. */
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

/** Represents a standard API error envelope. */
export interface ApiError {
  error: string;
  issues?: Record<string, string[]>;
}

/** Represents a paginated list response. */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
}
