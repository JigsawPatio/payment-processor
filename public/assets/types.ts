// types.ts
import { HttpMethods } from '@nestjs/common';

export enum PaymentMethod {
  CARD = 'CARD',
  BANK_TRANSFER = 'BANK_TRANSFER',
  PAYPAL = 'PAYPAL',
}

export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  JPY = 'JPY',
}

export enum TransactionStatus {
  PENDING = 'PENDING',
  SUCCESSFUL = 'SUCCESSFUL',
  FAILED = 'FAILED',
}

export enum OrderStatus {
  PENDING = 'PENDING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELED = 'CANCELED',
}

export enum LogLevel {
  ERROR = 'ERROR',
  WARN = 'WARN',
  INFO = 'INFO',
  DEBUG = 'DEBUG',
}

export enum HttpMethod {
  GET = HttpMethods.GET,
  POST = HttpMethods.POST,
  PUT = HttpMethods.PUT,
  DELETE = HttpMethods.DELETE,
  PATCH = HttpMethods.PATCH,
}

export interface PaymentRequest {
  amount: number;
  currency: Currency;
  paymentMethod: PaymentMethod;
  transactionId: string;
}

export interface OrderRequest {
  amount: number;
  currency: Currency;
  items: { id: string; quantity: number }[];
  customer: { name: string; email: string };
}

export interface PaymentResponse {
  transactionId: string;
  status: TransactionStatus;
  paymentMethod: PaymentMethod;
}

export interface OrderResponse {
  id: string;
  status: OrderStatus;
  items: { id: string; quantity: number }[];
  customer: { name: string; email: string };
}

export interface LoggerOptions {
  level: LogLevel;
  transport: string;
}