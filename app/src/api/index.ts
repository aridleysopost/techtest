import {
  MutationOptions,
  useMutation as useReactMutation,
  useQuery as useReactQuery,
  UseQueryOptions,
} from '@tanstack/react-query'
import axios from 'axios'
import {paths} from './schema'

type Filter<Source, Condition> = Pick<
  Source,
  {[K in keyof Source]: Source[K] extends Condition ? K : never}[keyof Source]
>

type QueryPath = {
  get: unknown
}

type QueryWithParametersPath = {
  get: {
    parameters: unknown
  }
}

type Mutation = {
  post: {
    requestBody?: {
      content: {
        'application/json': unknown
      }
    }
  }
}

type QueryPaths = keyof Filter<paths, QueryPath>

type QueryWithParametersPaths = keyof Filter<paths, QueryWithParametersPath>

type QueryParameters<P extends QueryWithParametersPaths> =
  paths[P]['get']['parameters']['path']

export type QueryResponse<P extends QueryPaths> =
  paths[P]['get']['responses'][200]['content']['application/json']

type MutationPaths = keyof Filter<paths, Mutation>

type MutationParameters<P extends MutationPaths> = Exclude<
  Required<paths[P]['post']>['requestBody'],
  undefined
>['content']['application/json']

export type MutationResponse<P extends MutationPaths> =
  paths[P]['post']['responses'][200]['content']['application/json']

const formatQueryPath = <P extends QueryPaths>(
  path: P,
  params?: P extends QueryWithParametersPaths ? QueryParameters<P> : never,
): string => {
  if (!params) return path

  return Object.keys(params).reduce(
    (acc: string, cur: string): string =>
      acc.replace(`{${cur}}`, String(params[cur as keyof typeof params])),
    path,
  )
}

const formatMutationPath = <P extends MutationPaths>(
  path: P,
  params?: MutationParameters<P>,
): string => {
  if (!params) return path

  return Object.keys(params).reduce(
    (acc: string, cur: string): string =>
      acc.replace(`{${cur}}`, String(params[cur as keyof typeof params])),
    path,
  )
}

export const useQuery = <P extends QueryPaths>(
  path: P,
  params?: P extends QueryWithParametersPaths ? QueryParameters<P> : never,
  options?: UseQueryOptions<QueryResponse<P>>,
) => useReactQuery<QueryResponse<P>>([formatQueryPath(path, params)], options)

export const useMutation = <P extends MutationPaths>(
  path: P,
  options?: MutationOptions<
    MutationResponse<P>,
    unknown,
    MutationParameters<P>
  >,
) => {
  return useReactMutation<MutationResponse<P>, unknown, MutationParameters<P>>(
    params => axios.post(formatMutationPath(path, params), params).then(({data}) => data),
    options,
  )
}
