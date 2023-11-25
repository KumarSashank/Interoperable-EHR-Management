"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Hyperledger Cactus Example - Health Care EHR App
 * Demonstrates EHR management across multiple distinct Hyperledger Fabric ledgers.
 *
 * The version of the OpenAPI document: v2.0.0-alpha.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultApi = exports.DefaultApiFactory = exports.DefaultApiFp = exports.DefaultApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
// Some imports not used depending on template conditions
// @ts-ignore
const common_1 = require("./common");
// @ts-ignore
const base_1 = require("./base");
/**
 * DefaultApi - axios parameter creator
 * @export
 */
const DefaultApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Inserts the provided data entity to the ledger.
         * @param {InsertDataRequest} [insertDataRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        insertDataRequestV1: async (insertDataRequest, options = {}) => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-healthcare-backend/insert-patient-hspa`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(insertDataRequest, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Lists all the Data entities stored on the ledger.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listDataV1: async (options = {}) => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-healthcare-backend/list-patient-hspa`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Lists all the BambooHarvest entities stored on the ledger.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listHSPBResponseV1: async (options = {}) => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-healthcare-backend/list-patient-hspb`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.DefaultApiAxiosParamCreator = DefaultApiAxiosParamCreator;
/**
 * DefaultApi - functional programming interface
 * @export
 */
const DefaultApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.DefaultApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Inserts the provided data entity to the ledger.
         * @param {InsertDataRequest} [insertDataRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async insertDataRequestV1(insertDataRequest, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.insertDataRequestV1(insertDataRequest, options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Lists all the Data entities stored on the ledger.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listDataV1(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listDataV1(options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
        /**
         *
         * @summary Lists all the BambooHarvest entities stored on the ledger.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listHSPBResponseV1(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listHSPBResponseV1(options);
            return (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration);
        },
    };
};
exports.DefaultApiFp = DefaultApiFp;
/**
 * DefaultApi - factory interface
 * @export
 */
const DefaultApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.DefaultApiFp)(configuration);
    return {
        /**
         *
         * @summary Inserts the provided data entity to the ledger.
         * @param {InsertDataRequest} [insertDataRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        insertDataRequestV1(insertDataRequest, options) {
            return localVarFp.insertDataRequestV1(insertDataRequest, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Lists all the Data entities stored on the ledger.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listDataV1(options) {
            return localVarFp.listDataV1(options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Lists all the BambooHarvest entities stored on the ledger.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listHSPBResponseV1(options) {
            return localVarFp.listHSPBResponseV1(options).then((request) => request(axios, basePath));
        },
    };
};
exports.DefaultApiFactory = DefaultApiFactory;
/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
class DefaultApi extends base_1.BaseAPI {
    /**
     *
     * @summary Inserts the provided data entity to the ledger.
     * @param {InsertDataRequest} [insertDataRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    insertDataRequestV1(insertDataRequest, options) {
        return (0, exports.DefaultApiFp)(this.configuration).insertDataRequestV1(insertDataRequest, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Lists all the Data entities stored on the ledger.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    listDataV1(options) {
        return (0, exports.DefaultApiFp)(this.configuration).listDataV1(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Lists all the BambooHarvest entities stored on the ledger.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    listHSPBResponseV1(options) {
        return (0, exports.DefaultApiFp)(this.configuration).listHSPBResponseV1(options).then((request) => request(this.axios, this.basePath));
    }
}
exports.DefaultApi = DefaultApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vdHlwZXNjcmlwdC9nZW5lcmF0ZWQvb3BlbmFwaS90eXBlc2NyaXB0LWF4aW9zL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQjs7Ozs7Ozs7OztHQVVHOzs7Ozs7QUFLSCxrREFBZ0M7QUFDaEMseURBQXlEO0FBQ3pELGFBQWE7QUFDYixxQ0FBNE47QUFFNU4sYUFBYTtBQUNiLGlDQUErRTtBQTZGL0U7OztHQUdHO0FBQ0ksTUFBTSwyQkFBMkIsR0FBRyxVQUFVLGFBQTZCO0lBQzlFLE9BQU87UUFDSDs7Ozs7O1dBTUc7UUFDSCxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsaUJBQXFDLEVBQUUsVUFBOEIsRUFBRSxFQUF3QixFQUFFO1lBQ3pILE1BQU0sWUFBWSxHQUFHLDRFQUE0RSxDQUFDO1lBQ2xHLG9GQUFvRjtZQUNwRixNQUFNLGNBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxZQUFZLEVBQUUsdUJBQWMsQ0FBQyxDQUFDO1lBQzdELElBQUksV0FBVyxDQUFDO1lBQ2hCLElBQUksYUFBYSxFQUFFO2dCQUNmLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO2FBQzNDO1lBRUQsTUFBTSxzQkFBc0IsaUNBQUssTUFBTSxFQUFFLE1BQU0sSUFBSyxXQUFXLEdBQUssT0FBTyxDQUFDLENBQUM7WUFDN0UsTUFBTSx1QkFBdUIsR0FBRyxFQUFTLENBQUM7WUFDMUMsTUFBTSxzQkFBc0IsR0FBRyxFQUFTLENBQUM7WUFJekMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLEdBQUcsa0JBQWtCLENBQUM7WUFFN0QsSUFBQSx3QkFBZSxFQUFDLGNBQWMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3hELElBQUksc0JBQXNCLEdBQUcsV0FBVyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxD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