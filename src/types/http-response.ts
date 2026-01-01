// Generic success response wrapper
export interface GenericResponseDto<T> {
  data: T;
}

export interface PaginatedResponse<T> {
  content: T[];
  number: number;
  totalPages: number;
}

// Error/Exception response
export interface ExceptionDto {
  message: string;
  code: number;
}
