import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';
import { KeysPreservedFromCaseTransformation } from '@/src/api/experts';
import { API_URL } from '@/src/constants/api';

const axiosInstance = (baseURL: string) => axios.create({
  baseURL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
});

const preservedKeys: KeysPreservedFromCaseTransformation = ['_sort', '_order', '_limit', '_page'];

export const apiClient = applyCaseMiddleware(axiosInstance(API_URL), {
  ignoreHeaders: true,
  preservedKeys
});
