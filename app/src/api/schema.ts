/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/api/order': {
    /** Order a number of donuts */
    post: operations['TechTestWeb.OrderController.index']
  }
  '/api/orders': {
    /** Show the list of currently ordered donuts */
    get: operations['TechTestWeb.OrderController.orders']
  }
  '/api/test': {
    /** Test */
    get: operations['TechTestWeb.TestController.index']
  }
}

export type webhooks = Record<string, never>

export interface components {
  schemas: {
    /**
     * OrderParams
     * @description Order Schema
     * @example {
     *   "name": "Jeff Daveson",
     *   "quantity": 72
     * }
     */
    OrderParams: {
      /** @description Name of the person ordering the donuts */
      name: string
      /** @description The number of donuts ordered */
      quantity: number
    }
    /**
     * OrderResponse
     * @description Order response schema
     * @example {
     *   "data": {}
     * }
     */
    OrderResponse: {
      data?: Record<string, never>
    }
    /**
     * OrdersResponse
     * @description Test Response Schema
     * @example {
     *   "data": {
     *     "orders": [
     *       {
     *         "name": "Jeff",
     *         "quantity": 5
     *       }
     *     ]
     *   }
     * }
     */
    OrdersResponse: {
      data?: {
        orders?: {
          name?: string
          quantity?: number
        }[]
      }
    }
    /**
     * Test
     * @description Test Schema
     * @example {
     *   "hello": "world"
     * }
     */
    Test: {
      /** @description Test Property (world) */
      hello: string
    }
    /**
     * TestResponse
     * @description Test Response Schema
     * @example {
     *   "data": {
     *     "hello": "world"
     *   }
     * }
     */
    TestResponse: {
      data?: components['schemas']['Test']
    }
  }
  responses: {}
  parameters: never
  requestBodies: never
  headers: never
  pathItems: never
}

export type external = Record<string, never>

export interface operations {
  'TechTestWeb.OrderController.index': {
    /** Order a number of donuts */
    /** @description Order params */
    requestBody?: {
      content: {
        'application/json': components['schemas']['OrderParams']
      }
    }
    responses: {
      /** @description Order */
      200: {
        content: {
          'application/json': components['schemas']['OrderResponse']
        }
      }
    }
  }
  'TechTestWeb.OrderController.orders': {
    /** Show the list of currently ordered donuts */
    responses: {
      /** @description Order */
      200: {
        content: {
          'application/json': components['schemas']['OrdersResponse']
        }
      }
    }
  }
  'TechTestWeb.TestController.index': {
    /** Test */
    responses: {
      /** @description Test */
      200: {
        content: {
          'application/json': components['schemas']['TestResponse']
        }
      }
    }
  }
}
