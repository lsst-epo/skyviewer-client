(self["webpackChunkhips_webgl_renderer"] = self["webpackChunkhips_webgl_renderer"] || []).push([["src_core_pkg_index_js"],{

/***/ "./src/core/pkg/index.js":
/*!*******************************!*\
  !*** ./src/core/pkg/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CooSystem": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.CooSystem),
/* harmony export */   "GALCooSys": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.GALCooSys),
/* harmony export */   "ICRSJ2000CooSys": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.ICRSJ2000CooSys),
/* harmony export */   "WebClient": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.WebClient),
/* harmony export */   "__wbg_activeTexture_4b5a30aed54cdc27": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_activeTexture_4b5a30aed54cdc27),
/* harmony export */   "__wbg_attachShader_f53ba6bf356e9757": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_attachShader_f53ba6bf356e9757),
/* harmony export */   "__wbg_bindBuffer_5f5c4d38f5589af4": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_bindBuffer_5f5c4d38f5589af4),
/* harmony export */   "__wbg_bindFramebuffer_ce3cfcfec4aa02cc": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_bindFramebuffer_ce3cfcfec4aa02cc),
/* harmony export */   "__wbg_bindTexture_f2a0487a487a78d9": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_bindTexture_f2a0487a487a78d9),
/* harmony export */   "__wbg_bindVertexArray_808c39d3c0f17264": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_bindVertexArray_808c39d3c0f17264),
/* harmony export */   "__wbg_blendFuncSeparate_5d0edb84373f725b": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_blendFuncSeparate_5d0edb84373f725b),
/* harmony export */   "__wbg_blendFunc_d2d37c0919e2221c": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_blendFunc_d2d37c0919e2221c),
/* harmony export */   "__wbg_bufferData_17091aec18ec51c8": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_bufferData_17091aec18ec51c8),
/* harmony export */   "__wbg_bufferSubData_c06ea806212e9c9a": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_bufferSubData_c06ea806212e9c9a),
/* harmony export */   "__wbg_buffer_ebc6c8e75510eae3": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_buffer_ebc6c8e75510eae3),
/* harmony export */   "__wbg_call_cb478d88f3068c91": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_call_cb478d88f3068c91),
/* harmony export */   "__wbg_canvas_8c9f75f2d1654dc6": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_canvas_8c9f75f2d1654dc6),
/* harmony export */   "__wbg_clearColor_00475fe36f61a856": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_clearColor_00475fe36f61a856),
/* harmony export */   "__wbg_clearRect_dbb56982eff2a250": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_clearRect_dbb56982eff2a250),
/* harmony export */   "__wbg_clear_30e4727c6176f315": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_clear_30e4727c6176f315),
/* harmony export */   "__wbg_compileShader_42ca15ab42f3bc4e": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_compileShader_42ca15ab42f3bc4e),
/* harmony export */   "__wbg_createBuffer_8040ad276d5ed8bb": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_createBuffer_8040ad276d5ed8bb),
/* harmony export */   "__wbg_createFramebuffer_7fd863d54241be81": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_createFramebuffer_7fd863d54241be81),
/* harmony export */   "__wbg_createProgram_1de639d74a7834a3": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_createProgram_1de639d74a7834a3),
/* harmony export */   "__wbg_createShader_f0fb93d33a5832a3": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_createShader_f0fb93d33a5832a3),
/* harmony export */   "__wbg_createTexture_a46f881a1c96b496": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_createTexture_a46f881a1c96b496),
/* harmony export */   "__wbg_createVertexArray_855d59250230c563": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_createVertexArray_855d59250230c563),
/* harmony export */   "__wbg_cullFace_af5db4e693f7ce67": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_cullFace_af5db4e693f7ce67),
/* harmony export */   "__wbg_deleteBuffer_141aad9214e589cd": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_deleteBuffer_141aad9214e589cd),
/* harmony export */   "__wbg_deleteFramebuffer_867aba8474910f62": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_deleteFramebuffer_867aba8474910f62),
/* harmony export */   "__wbg_deleteTexture_1affe310edd12b75": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_deleteTexture_1affe310edd12b75),
/* harmony export */   "__wbg_deleteVertexArray_0a2982a2491f4fa9": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_deleteVertexArray_0a2982a2491f4fa9),
/* harmony export */   "__wbg_disableVertexAttribArray_f13a5786686fd68f": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_disableVertexAttribArray_f13a5786686fd68f),
/* harmony export */   "__wbg_disable_ae6336ea122a9e25": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_disable_ae6336ea122a9e25),
/* harmony export */   "__wbg_document_249e9cf340780f93": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_document_249e9cf340780f93),
/* harmony export */   "__wbg_drawArrays_84de63627695c4b0": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_drawArrays_84de63627695c4b0),
/* harmony export */   "__wbg_drawElementsInstanced_8b623d1ee1b61fd1": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_drawElementsInstanced_8b623d1ee1b61fd1),
/* harmony export */   "__wbg_drawElements_82eee89b067a236a": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_drawElements_82eee89b067a236a),
/* harmony export */   "__wbg_enableVertexAttribArray_288f04a5fcb818df": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_enableVertexAttribArray_288f04a5fcb818df),
/* harmony export */   "__wbg_enable_f00191ae560ac9ef": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_enable_f00191ae560ac9ef),
/* harmony export */   "__wbg_error_4bb6c2a97407129a": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_error_4bb6c2a97407129a),
/* harmony export */   "__wbg_fillText_1a4eaffef23bd8b7": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_fillText_1a4eaffef23bd8b7),
/* harmony export */   "__wbg_framebufferTexture2D_9a77a023fd4aedcc": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_framebufferTexture2D_9a77a023fd4aedcc),
/* harmony export */   "__wbg_getActiveUniform_d38641d1e6282920": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getActiveUniform_d38641d1e6282920),
/* harmony export */   "__wbg_getContext_4678c25f580222b0": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getContext_4678c25f580222b0),
/* harmony export */   "__wbg_getContext_d778ffc8203f64ae": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getContext_d778ffc8203f64ae),
/* harmony export */   "__wbg_getElementById_2ee254bbb67b6ae1": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getElementById_2ee254bbb67b6ae1),
/* harmony export */   "__wbg_getElementsByClassName_72e63c7a1766ad3c": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getElementsByClassName_72e63c7a1766ad3c),
/* harmony export */   "__wbg_getExtension_d20d9c678d874b63": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getExtension_d20d9c678d874b63),
/* harmony export */   "__wbg_getProgramInfoLog_4e8efab14b80a4f3": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getProgramInfoLog_4e8efab14b80a4f3),
/* harmony export */   "__wbg_getProgramParameter_98987a4367faf22d": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getProgramParameter_98987a4367faf22d),
/* harmony export */   "__wbg_getShaderInfoLog_e5f754825af7ee35": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getShaderInfoLog_e5f754825af7ee35),
/* harmony export */   "__wbg_getShaderParameter_3760f3569c62d1c2": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getShaderParameter_3760f3569c62d1c2),
/* harmony export */   "__wbg_getUniformLocation_abc33d49b1c6adc6": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getUniformLocation_abc33d49b1c6adc6),
/* harmony export */   "__wbg_get_f099d98ea7d68360": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_get_f099d98ea7d68360),
/* harmony export */   "__wbg_getwithindex_78954e8b63abb0b8": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_getwithindex_78954e8b63abb0b8),
/* harmony export */   "__wbg_globalThis_f0ca0bbb0149cf3d": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_globalThis_f0ca0bbb0149cf3d),
/* harmony export */   "__wbg_global_c3c8325ae8c7f1a9": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_global_c3c8325ae8c7f1a9),
/* harmony export */   "__wbg_height_872c06b1bc666dd9": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_height_872c06b1bc666dd9),
/* harmony export */   "__wbg_height_fadb4d0c1b0d38e1": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_height_fadb4d0c1b0d38e1),
/* harmony export */   "__wbg_innerHeight_e73b06bc6aaff2f6": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_innerHeight_e73b06bc6aaff2f6),
/* harmony export */   "__wbg_innerWidth_2bb09626230de7ba": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_innerWidth_2bb09626230de7ba),
/* harmony export */   "__wbg_instanceof_CanvasRenderingContext2d_eea9cd931eb496b7": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_instanceof_CanvasRenderingContext2d_eea9cd931eb496b7),
/* harmony export */   "__wbg_instanceof_HtmlCanvasElement_e0e251da2aa0b541": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_instanceof_HtmlCanvasElement_e0e251da2aa0b541),
/* harmony export */   "__wbg_instanceof_WebGl2RenderingContext_61a66a1af6516586": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_instanceof_WebGl2RenderingContext_61a66a1af6516586),
/* harmony export */   "__wbg_instanceof_Window_9c4fd26090e1d029": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_instanceof_Window_9c4fd26090e1d029),
/* harmony export */   "__wbg_isArray_bccef1135dd559c1": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_isArray_bccef1135dd559c1),
/* harmony export */   "__wbg_length_07eaac172e006183": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_length_07eaac172e006183),
/* harmony export */   "__wbg_length_317f0dd77f7a6673": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_length_317f0dd77f7a6673),
/* harmony export */   "__wbg_length_329ad67a742437ad": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_length_329ad67a742437ad),
/* harmony export */   "__wbg_length_37270b84c9a37bef": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_length_37270b84c9a37bef),
/* harmony export */   "__wbg_length_450572e01ae27466": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_length_450572e01ae27466),
/* harmony export */   "__wbg_lineWidth_284ed95bb46ea0ad": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_lineWidth_284ed95bb46ea0ad),
/* harmony export */   "__wbg_linkProgram_1b0f85f4af978d39": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_linkProgram_1b0f85f4af978d39),
/* harmony export */   "__wbg_log_a39f164b49616cb0": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_log_a39f164b49616cb0),
/* harmony export */   "__wbg_measureText_8c14bb26761d3435": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_measureText_8c14bb26761d3435),
/* harmony export */   "__wbg_name_a4114218825a59b3": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_name_a4114218825a59b3),
/* harmony export */   "__wbg_new_0891fac076d9e6b3": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_new_0891fac076d9e6b3),
/* harmony export */   "__wbg_new_135e963dedf67b22": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_new_135e963dedf67b22),
/* harmony export */   "__wbg_new_3e986ca39e7a9239": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_new_3e986ca39e7a9239),
/* harmony export */   "__wbg_new_59cb74e423758ede": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_new_59cb74e423758ede),
/* harmony export */   "__wbg_new_5c2190a641284929": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_new_5c2190a641284929),
/* harmony export */   "__wbg_new_ca68351634a50de4": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_new_ca68351634a50de4),
/* harmony export */   "__wbg_new_cc5264f47906c023": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_new_cc5264f47906c023),
/* harmony export */   "__wbg_newnoargs_3efc7bfa69a681f9": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newnoargs_3efc7bfa69a681f9),
/* harmony export */   "__wbg_newwithbyteoffsetandlength_4817f1ce0d00c81c": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newwithbyteoffsetandlength_4817f1ce0d00c81c),
/* harmony export */   "__wbg_newwithbyteoffsetandlength_9eb3327abeac2c52": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newwithbyteoffsetandlength_9eb3327abeac2c52),
/* harmony export */   "__wbg_newwithbyteoffsetandlength_ab2b53c614369e0e": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newwithbyteoffsetandlength_ab2b53c614369e0e),
/* harmony export */   "__wbg_newwithbyteoffsetandlength_ca3d3d8811ecb569": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newwithbyteoffsetandlength_ca3d3d8811ecb569),
/* harmony export */   "__wbg_newwithbyteoffsetandlength_eaa671c25ed287c1": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newwithbyteoffsetandlength_eaa671c25ed287c1),
/* harmony export */   "__wbg_newwithlength_32e49b6968aa9cf2": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newwithlength_32e49b6968aa9cf2),
/* harmony export */   "__wbg_newwithlength_70ad5c42e1ce6181": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newwithlength_70ad5c42e1ce6181),
/* harmony export */   "__wbg_newwithlength_78dc302d31527318": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newwithlength_78dc302d31527318),
/* harmony export */   "__wbg_newwithlength_d7279859bc8b7a9a": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_newwithlength_d7279859bc8b7a9a),
/* harmony export */   "__wbg_now_4abbca4ef2aba8d6": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_now_4abbca4ef2aba8d6),
/* harmony export */   "__wbg_open_d71122b8786bb048": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_open_d71122b8786bb048),
/* harmony export */   "__wbg_parse_13ee9d835244eb72": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_parse_13ee9d835244eb72),
/* harmony export */   "__wbg_performance_e029cf47e1c47c09": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_performance_e029cf47e1c47c09),
/* harmony export */   "__wbg_readPixels_3d9330105a907e24": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_readPixels_3d9330105a907e24),
/* harmony export */   "__wbg_responseURL_af1ada560f8a25c6": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_responseURL_af1ada560f8a25c6),
/* harmony export */   "__wbg_response_4e0c2c1b8f32e827": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_response_4e0c2c1b8f32e827),
/* harmony export */   "__wbg_restore_c480175de20d25ec": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_restore_c480175de20d25ec),
/* harmony export */   "__wbg_rotate_b5850a81741b624a": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_rotate_b5850a81741b624a),
/* harmony export */   "__wbg_save_d60be08cdef5b02f": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_save_d60be08cdef5b02f),
/* harmony export */   "__wbg_scale_8d56361ac5b8a5b2": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_scale_8d56361ac5b8a5b2),
/* harmony export */   "__wbg_scissor_1b3bb8361889e729": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_scissor_1b3bb8361889e729),
/* harmony export */   "__wbg_self_05c54dcacb623b9a": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_self_05c54dcacb623b9a),
/* harmony export */   "__wbg_send_03c8d891bc24da59": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_send_03c8d891bc24da59),
/* harmony export */   "__wbg_setAttribute_0b50656f1ccc45bf": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_setAttribute_0b50656f1ccc45bf),
/* harmony export */   "__wbg_set_4a5072a31008e0cb": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_4a5072a31008e0cb),
/* harmony export */   "__wbg_set_531672550781c6cf": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_531672550781c6cf),
/* harmony export */   "__wbg_set_5506d41c201b4cf9": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_5506d41c201b4cf9),
/* harmony export */   "__wbg_set_ebaacd220d944f77": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_ebaacd220d944f77),
/* harmony export */   "__wbg_setcrossOrigin_805465e7e13f5c9e": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_setcrossOrigin_805465e7e13f5c9e),
/* harmony export */   "__wbg_setfillStyle_5306396b0368ba08": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_setfillStyle_5306396b0368ba08),
/* harmony export */   "__wbg_setfont_781d8a4777f9b05d": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_setfont_781d8a4777f9b05d),
/* harmony export */   "__wbg_setheight_5b882973e84fa13c": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_setheight_5b882973e84fa13c),
/* harmony export */   "__wbg_setonerror_13ea4e722e360e2e": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_setonerror_13ea4e722e360e2e),
/* harmony export */   "__wbg_setonerror_cb5c65763e1a60d2": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_setonerror_cb5c65763e1a60d2),
/* harmony export */   "__wbg_setonload_5f47f8356794f80d": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_setonload_5f47f8356794f80d),
/* harmony export */   "__wbg_setonload_9871733840c353bb": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_setonload_9871733840c353bb),
/* harmony export */   "__wbg_setresponseType_165b92939d652606": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_setresponseType_165b92939d652606),
/* harmony export */   "__wbg_setsrc_21ed0b40d0ff0413": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_setsrc_21ed0b40d0ff0413),
/* harmony export */   "__wbg_settextAlign_92c91d5fffbd336b": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_settextAlign_92c91d5fffbd336b),
/* harmony export */   "__wbg_setwidth_fd251e9da5abcced": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_setwidth_fd251e9da5abcced),
/* harmony export */   "__wbg_shaderSource_ed7a4aff709aac74": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_shaderSource_ed7a4aff709aac74),
/* harmony export */   "__wbg_stack_558ba5917b466edd": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_stack_558ba5917b466edd),
/* harmony export */   "__wbg_subarray_e31c6125926e9ce6": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_subarray_e31c6125926e9ce6),
/* harmony export */   "__wbg_texImage2D_173d216c50e54701": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_texImage2D_173d216c50e54701),
/* harmony export */   "__wbg_texImage2D_654258ac4b9951ec": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_texImage2D_654258ac4b9951ec),
/* harmony export */   "__wbg_texParameteri_e99b48aa90ae569b": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_texParameteri_e99b48aa90ae569b),
/* harmony export */   "__wbg_texSubImage2D_bbb93a1e54213fd8": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_texSubImage2D_bbb93a1e54213fd8),
/* harmony export */   "__wbg_texSubImage2D_ff84854054ae247f": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_texSubImage2D_ff84854054ae247f),
/* harmony export */   "__wbg_translate_7d45a38726b69555": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_translate_7d45a38726b69555),
/* harmony export */   "__wbg_uniform1f_36ec670bb2ed1573": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_uniform1f_36ec670bb2ed1573),
/* harmony export */   "__wbg_uniform1fv_44d80c9ff70429ee": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_uniform1fv_44d80c9ff70429ee),
/* harmony export */   "__wbg_uniform1i_f4db1eaef4655b7a": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_uniform1i_f4db1eaef4655b7a),
/* harmony export */   "__wbg_uniform2f_bf470d545fdd8552": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_uniform2f_bf470d545fdd8552),
/* harmony export */   "__wbg_uniform3f_575d1536c25b01fe": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_uniform3f_575d1536c25b01fe),
/* harmony export */   "__wbg_uniform4f_92043581bec01bb1": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_uniform4f_92043581bec01bb1),
/* harmony export */   "__wbg_uniformMatrix4fv_64a33f17a033cfaa": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_uniformMatrix4fv_64a33f17a033cfaa),
/* harmony export */   "__wbg_useProgram_0c20a8b7d005f144": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_useProgram_0c20a8b7d005f144),
/* harmony export */   "__wbg_vertexAttribDivisor_cfecf0168fd7a829": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_vertexAttribDivisor_cfecf0168fd7a829),
/* harmony export */   "__wbg_vertexAttribPointer_a82a34dbb0332fd7": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_vertexAttribPointer_a82a34dbb0332fd7),
/* harmony export */   "__wbg_viewport_778271db50cd72a0": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_viewport_778271db50cd72a0),
/* harmony export */   "__wbg_width_1765e13e0099f9cf": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_width_1765e13e0099f9cf),
/* harmony export */   "__wbg_width_5843e31ec081f978": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_width_5843e31ec081f978),
/* harmony export */   "__wbg_width_9c3c9e775c405aaa": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_width_9c3c9e775c405aaa),
/* harmony export */   "__wbg_window_9777ce446d12989f": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_window_9777ce446d12989f),
/* harmony export */   "__wbindgen_boolean_get": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_boolean_get),
/* harmony export */   "__wbindgen_cb_drop": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_cb_drop),
/* harmony export */   "__wbindgen_closure_wrapper359": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_closure_wrapper359),
/* harmony export */   "__wbindgen_closure_wrapper412": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_closure_wrapper412),
/* harmony export */   "__wbindgen_debug_string": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_debug_string),
/* harmony export */   "__wbindgen_is_undefined": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_is_undefined),
/* harmony export */   "__wbindgen_json_parse": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_json_parse),
/* harmony export */   "__wbindgen_json_serialize": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_json_serialize),
/* harmony export */   "__wbindgen_memory": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_memory),
/* harmony export */   "__wbindgen_number_get": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_number_get),
/* harmony export */   "__wbindgen_object_clone_ref": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_object_clone_ref),
/* harmony export */   "__wbindgen_object_drop_ref": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_object_drop_ref),
/* harmony export */   "__wbindgen_rethrow": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_rethrow),
/* harmony export */   "__wbindgen_string_new": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_string_new),
/* harmony export */   "__wbindgen_throw": () => (/* reexport safe */ _index_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw)
/* harmony export */ });
/* harmony import */ var _index_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.js */ "./src/core/pkg/index_bg.js");



/***/ }),

/***/ "./src/core/pkg/index_bg.js":
/*!**********************************!*\
  !*** ./src/core/pkg/index_bg.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GALCooSys": () => (/* binding */ GALCooSys),
/* harmony export */   "ICRSJ2000CooSys": () => (/* binding */ ICRSJ2000CooSys),
/* harmony export */   "CooSystem": () => (/* binding */ CooSystem),
/* harmony export */   "WebClient": () => (/* binding */ WebClient),
/* harmony export */   "__wbg_canvas_8c9f75f2d1654dc6": () => (/* binding */ __wbg_canvas_8c9f75f2d1654dc6),
/* harmony export */   "__wbg_instanceof_HtmlCanvasElement_e0e251da2aa0b541": () => (/* binding */ __wbg_instanceof_HtmlCanvasElement_e0e251da2aa0b541),
/* harmony export */   "__wbg_setwidth_fd251e9da5abcced": () => (/* binding */ __wbg_setwidth_fd251e9da5abcced),
/* harmony export */   "__wbg_setheight_5b882973e84fa13c": () => (/* binding */ __wbg_setheight_5b882973e84fa13c),
/* harmony export */   "__wbg_viewport_778271db50cd72a0": () => (/* binding */ __wbg_viewport_778271db50cd72a0),
/* harmony export */   "__wbg_scissor_1b3bb8361889e729": () => (/* binding */ __wbg_scissor_1b3bb8361889e729),
/* harmony export */   "__wbindgen_object_drop_ref": () => (/* binding */ __wbindgen_object_drop_ref),
/* harmony export */   "__wbindgen_memory": () => (/* binding */ __wbindgen_memory),
/* harmony export */   "__wbg_buffer_ebc6c8e75510eae3": () => (/* binding */ __wbg_buffer_ebc6c8e75510eae3),
/* harmony export */   "__wbg_new_cc5264f47906c023": () => (/* binding */ __wbg_new_cc5264f47906c023),
/* harmony export */   "__wbg_subarray_e31c6125926e9ce6": () => (/* binding */ __wbg_subarray_e31c6125926e9ce6),
/* harmony export */   "__wbg_measureText_8c14bb26761d3435": () => (/* binding */ __wbg_measureText_8c14bb26761d3435),
/* harmony export */   "__wbg_width_9c3c9e775c405aaa": () => (/* binding */ __wbg_width_9c3c9e775c405aaa),
/* harmony export */   "__wbg_bindVertexArray_808c39d3c0f17264": () => (/* binding */ __wbg_bindVertexArray_808c39d3c0f17264),
/* harmony export */   "__wbg_bindBuffer_5f5c4d38f5589af4": () => (/* binding */ __wbg_bindBuffer_5f5c4d38f5589af4),
/* harmony export */   "__wbg_bufferData_17091aec18ec51c8": () => (/* binding */ __wbg_bufferData_17091aec18ec51c8),
/* harmony export */   "__wbg_bufferSubData_c06ea806212e9c9a": () => (/* binding */ __wbg_bufferSubData_c06ea806212e9c9a),
/* harmony export */   "__wbindgen_json_serialize": () => (/* binding */ __wbindgen_json_serialize),
/* harmony export */   "__wbg_performance_e029cf47e1c47c09": () => (/* binding */ __wbg_performance_e029cf47e1c47c09),
/* harmony export */   "__wbg_now_4abbca4ef2aba8d6": () => (/* binding */ __wbg_now_4abbca4ef2aba8d6),
/* harmony export */   "__wbg_bindTexture_f2a0487a487a78d9": () => (/* binding */ __wbg_bindTexture_f2a0487a487a78d9),
/* harmony export */   "__wbg_texSubImage2D_bbb93a1e54213fd8": () => (/* binding */ __wbg_texSubImage2D_bbb93a1e54213fd8),
/* harmony export */   "__wbg_blendFuncSeparate_5d0edb84373f725b": () => (/* binding */ __wbg_blendFuncSeparate_5d0edb84373f725b),
/* harmony export */   "__wbg_enable_f00191ae560ac9ef": () => (/* binding */ __wbg_enable_f00191ae560ac9ef),
/* harmony export */   "__wbg_cullFace_af5db4e693f7ce67": () => (/* binding */ __wbg_cullFace_af5db4e693f7ce67),
/* harmony export */   "__wbg_innerWidth_2bb09626230de7ba": () => (/* binding */ __wbg_innerWidth_2bb09626230de7ba),
/* harmony export */   "__wbindgen_number_get": () => (/* binding */ __wbindgen_number_get),
/* harmony export */   "__wbg_innerHeight_e73b06bc6aaff2f6": () => (/* binding */ __wbg_innerHeight_e73b06bc6aaff2f6),
/* harmony export */   "__wbg_new_0891fac076d9e6b3": () => (/* binding */ __wbg_new_0891fac076d9e6b3),
/* harmony export */   "__wbg_setcrossOrigin_805465e7e13f5c9e": () => (/* binding */ __wbg_setcrossOrigin_805465e7e13f5c9e),
/* harmony export */   "__wbg_new_ca68351634a50de4": () => (/* binding */ __wbg_new_ca68351634a50de4),
/* harmony export */   "__wbindgen_string_new": () => (/* binding */ __wbindgen_string_new),
/* harmony export */   "__wbg_setresponseType_165b92939d652606": () => (/* binding */ __wbg_setresponseType_165b92939d652606),
/* harmony export */   "__wbg_createFramebuffer_7fd863d54241be81": () => (/* binding */ __wbg_createFramebuffer_7fd863d54241be81),
/* harmony export */   "__wbg_bindFramebuffer_ce3cfcfec4aa02cc": () => (/* binding */ __wbg_bindFramebuffer_ce3cfcfec4aa02cc),
/* harmony export */   "__wbg_framebufferTexture2D_9a77a023fd4aedcc": () => (/* binding */ __wbg_framebufferTexture2D_9a77a023fd4aedcc),
/* harmony export */   "__wbg_createVertexArray_855d59250230c563": () => (/* binding */ __wbg_createVertexArray_855d59250230c563),
/* harmony export */   "__wbg_useProgram_0c20a8b7d005f144": () => (/* binding */ __wbg_useProgram_0c20a8b7d005f144),
/* harmony export */   "__wbg_createBuffer_8040ad276d5ed8bb": () => (/* binding */ __wbg_createBuffer_8040ad276d5ed8bb),
/* harmony export */   "__wbg_lineWidth_284ed95bb46ea0ad": () => (/* binding */ __wbg_lineWidth_284ed95bb46ea0ad),
/* harmony export */   "__wbg_vertexAttribPointer_a82a34dbb0332fd7": () => (/* binding */ __wbg_vertexAttribPointer_a82a34dbb0332fd7),
/* harmony export */   "__wbg_enableVertexAttribArray_288f04a5fcb818df": () => (/* binding */ __wbg_enableVertexAttribArray_288f04a5fcb818df),
/* harmony export */   "__wbg_document_249e9cf340780f93": () => (/* binding */ __wbg_document_249e9cf340780f93),
/* harmony export */   "__wbg_getElementById_2ee254bbb67b6ae1": () => (/* binding */ __wbg_getElementById_2ee254bbb67b6ae1),
/* harmony export */   "__wbg_getElementsByClassName_72e63c7a1766ad3c": () => (/* binding */ __wbg_getElementsByClassName_72e63c7a1766ad3c),
/* harmony export */   "__wbg_getwithindex_78954e8b63abb0b8": () => (/* binding */ __wbg_getwithindex_78954e8b63abb0b8),
/* harmony export */   "__wbg_setAttribute_0b50656f1ccc45bf": () => (/* binding */ __wbg_setAttribute_0b50656f1ccc45bf),
/* harmony export */   "__wbg_getContext_d778ffc8203f64ae": () => (/* binding */ __wbg_getContext_d778ffc8203f64ae),
/* harmony export */   "__wbg_instanceof_CanvasRenderingContext2d_eea9cd931eb496b7": () => (/* binding */ __wbg_instanceof_CanvasRenderingContext2d_eea9cd931eb496b7),
/* harmony export */   "__wbg_scale_8d56361ac5b8a5b2": () => (/* binding */ __wbg_scale_8d56361ac5b8a5b2),
/* harmony export */   "__wbg_createTexture_a46f881a1c96b496": () => (/* binding */ __wbg_createTexture_a46f881a1c96b496),
/* harmony export */   "__wbindgen_object_clone_ref": () => (/* binding */ __wbindgen_object_clone_ref),
/* harmony export */   "__wbg_setonload_5f47f8356794f80d": () => (/* binding */ __wbg_setonload_5f47f8356794f80d),
/* harmony export */   "__wbg_setonerror_13ea4e722e360e2e": () => (/* binding */ __wbg_setonerror_13ea4e722e360e2e),
/* harmony export */   "__wbg_setsrc_21ed0b40d0ff0413": () => (/* binding */ __wbg_setsrc_21ed0b40d0ff0413),
/* harmony export */   "__wbg_texParameteri_e99b48aa90ae569b": () => (/* binding */ __wbg_texParameteri_e99b48aa90ae569b),
/* harmony export */   "__wbg_texImage2D_654258ac4b9951ec": () => (/* binding */ __wbg_texImage2D_654258ac4b9951ec),
/* harmony export */   "__wbg_log_a39f164b49616cb0": () => (/* binding */ __wbg_log_a39f164b49616cb0),
/* harmony export */   "__wbg_texImage2D_173d216c50e54701": () => (/* binding */ __wbg_texImage2D_173d216c50e54701),
/* harmony export */   "__wbg_newwithbyteoffsetandlength_4817f1ce0d00c81c": () => (/* binding */ __wbg_newwithbyteoffsetandlength_4817f1ce0d00c81c),
/* harmony export */   "__wbg_new_5c2190a641284929": () => (/* binding */ __wbg_new_5c2190a641284929),
/* harmony export */   "__wbg_newwithbyteoffsetandlength_ca3d3d8811ecb569": () => (/* binding */ __wbg_newwithbyteoffsetandlength_ca3d3d8811ecb569),
/* harmony export */   "__wbg_new_135e963dedf67b22": () => (/* binding */ __wbg_new_135e963dedf67b22),
/* harmony export */   "__wbg_newwithbyteoffsetandlength_eaa671c25ed287c1": () => (/* binding */ __wbg_newwithbyteoffsetandlength_eaa671c25ed287c1),
/* harmony export */   "__wbg_new_3e986ca39e7a9239": () => (/* binding */ __wbg_new_3e986ca39e7a9239),
/* harmony export */   "__wbg_vertexAttribDivisor_cfecf0168fd7a829": () => (/* binding */ __wbg_vertexAttribDivisor_cfecf0168fd7a829),
/* harmony export */   "__wbg_deleteBuffer_141aad9214e589cd": () => (/* binding */ __wbg_deleteBuffer_141aad9214e589cd),
/* harmony export */   "__wbg_createProgram_1de639d74a7834a3": () => (/* binding */ __wbg_createProgram_1de639d74a7834a3),
/* harmony export */   "__wbg_attachShader_f53ba6bf356e9757": () => (/* binding */ __wbg_attachShader_f53ba6bf356e9757),
/* harmony export */   "__wbg_linkProgram_1b0f85f4af978d39": () => (/* binding */ __wbg_linkProgram_1b0f85f4af978d39),
/* harmony export */   "__wbg_getProgramParameter_98987a4367faf22d": () => (/* binding */ __wbg_getProgramParameter_98987a4367faf22d),
/* harmony export */   "__wbindgen_boolean_get": () => (/* binding */ __wbindgen_boolean_get),
/* harmony export */   "__wbg_getProgramInfoLog_4e8efab14b80a4f3": () => (/* binding */ __wbg_getProgramInfoLog_4e8efab14b80a4f3),
/* harmony export */   "__wbg_getActiveUniform_d38641d1e6282920": () => (/* binding */ __wbg_getActiveUniform_d38641d1e6282920),
/* harmony export */   "__wbg_name_a4114218825a59b3": () => (/* binding */ __wbg_name_a4114218825a59b3),
/* harmony export */   "__wbg_getUniformLocation_abc33d49b1c6adc6": () => (/* binding */ __wbg_getUniformLocation_abc33d49b1c6adc6),
/* harmony export */   "__wbg_createShader_f0fb93d33a5832a3": () => (/* binding */ __wbg_createShader_f0fb93d33a5832a3),
/* harmony export */   "__wbg_shaderSource_ed7a4aff709aac74": () => (/* binding */ __wbg_shaderSource_ed7a4aff709aac74),
/* harmony export */   "__wbg_compileShader_42ca15ab42f3bc4e": () => (/* binding */ __wbg_compileShader_42ca15ab42f3bc4e),
/* harmony export */   "__wbg_getShaderParameter_3760f3569c62d1c2": () => (/* binding */ __wbg_getShaderParameter_3760f3569c62d1c2),
/* harmony export */   "__wbg_getShaderInfoLog_e5f754825af7ee35": () => (/* binding */ __wbg_getShaderInfoLog_e5f754825af7ee35),
/* harmony export */   "__wbg_clearColor_00475fe36f61a856": () => (/* binding */ __wbg_clearColor_00475fe36f61a856),
/* harmony export */   "__wbg_clear_30e4727c6176f315": () => (/* binding */ __wbg_clear_30e4727c6176f315),
/* harmony export */   "__wbg_width_1765e13e0099f9cf": () => (/* binding */ __wbg_width_1765e13e0099f9cf),
/* harmony export */   "__wbg_height_fadb4d0c1b0d38e1": () => (/* binding */ __wbg_height_fadb4d0c1b0d38e1),
/* harmony export */   "__wbg_uniform1f_36ec670bb2ed1573": () => (/* binding */ __wbg_uniform1f_36ec670bb2ed1573),
/* harmony export */   "__wbg_uniform2f_bf470d545fdd8552": () => (/* binding */ __wbg_uniform2f_bf470d545fdd8552),
/* harmony export */   "__wbg_drawElementsInstanced_8b623d1ee1b61fd1": () => (/* binding */ __wbg_drawElementsInstanced_8b623d1ee1b61fd1),
/* harmony export */   "__wbg_uniform1i_f4db1eaef4655b7a": () => (/* binding */ __wbg_uniform1i_f4db1eaef4655b7a),
/* harmony export */   "__wbg_drawElements_82eee89b067a236a": () => (/* binding */ __wbg_drawElements_82eee89b067a236a),
/* harmony export */   "__wbg_uniform4f_92043581bec01bb1": () => (/* binding */ __wbg_uniform4f_92043581bec01bb1),
/* harmony export */   "__wbg_drawArrays_84de63627695c4b0": () => (/* binding */ __wbg_drawArrays_84de63627695c4b0),
/* harmony export */   "__wbg_clearRect_dbb56982eff2a250": () => (/* binding */ __wbg_clearRect_dbb56982eff2a250),
/* harmony export */   "__wbg_setfont_781d8a4777f9b05d": () => (/* binding */ __wbg_setfont_781d8a4777f9b05d),
/* harmony export */   "__wbg_settextAlign_92c91d5fffbd336b": () => (/* binding */ __wbg_settextAlign_92c91d5fffbd336b),
/* harmony export */   "__wbg_setfillStyle_5306396b0368ba08": () => (/* binding */ __wbg_setfillStyle_5306396b0368ba08),
/* harmony export */   "__wbg_save_d60be08cdef5b02f": () => (/* binding */ __wbg_save_d60be08cdef5b02f),
/* harmony export */   "__wbg_translate_7d45a38726b69555": () => (/* binding */ __wbg_translate_7d45a38726b69555),
/* harmony export */   "__wbg_rotate_b5850a81741b624a": () => (/* binding */ __wbg_rotate_b5850a81741b624a),
/* harmony export */   "__wbg_fillText_1a4eaffef23bd8b7": () => (/* binding */ __wbg_fillText_1a4eaffef23bd8b7),
/* harmony export */   "__wbg_restore_c480175de20d25ec": () => (/* binding */ __wbg_restore_c480175de20d25ec),
/* harmony export */   "__wbg_disable_ae6336ea122a9e25": () => (/* binding */ __wbg_disable_ae6336ea122a9e25),
/* harmony export */   "__wbg_parse_13ee9d835244eb72": () => (/* binding */ __wbg_parse_13ee9d835244eb72),
/* harmony export */   "__wbg_getContext_4678c25f580222b0": () => (/* binding */ __wbg_getContext_4678c25f580222b0),
/* harmony export */   "__wbg_instanceof_WebGl2RenderingContext_61a66a1af6516586": () => (/* binding */ __wbg_instanceof_WebGl2RenderingContext_61a66a1af6516586),
/* harmony export */   "__wbg_getExtension_d20d9c678d874b63": () => (/* binding */ __wbg_getExtension_d20d9c678d874b63),
/* harmony export */   "__wbindgen_cb_drop": () => (/* binding */ __wbindgen_cb_drop),
/* harmony export */   "__wbindgen_json_parse": () => (/* binding */ __wbindgen_json_parse),
/* harmony export */   "__wbg_isArray_bccef1135dd559c1": () => (/* binding */ __wbg_isArray_bccef1135dd559c1),
/* harmony export */   "__wbg_length_450572e01ae27466": () => (/* binding */ __wbg_length_450572e01ae27466),
/* harmony export */   "__wbg_get_f099d98ea7d68360": () => (/* binding */ __wbg_get_f099d98ea7d68360),
/* harmony export */   "__wbg_activeTexture_4b5a30aed54cdc27": () => (/* binding */ __wbg_activeTexture_4b5a30aed54cdc27),
/* harmony export */   "__wbg_uniform1fv_44d80c9ff70429ee": () => (/* binding */ __wbg_uniform1fv_44d80c9ff70429ee),
/* harmony export */   "__wbg_uniformMatrix4fv_64a33f17a033cfaa": () => (/* binding */ __wbg_uniformMatrix4fv_64a33f17a033cfaa),
/* harmony export */   "__wbg_uniform3f_575d1536c25b01fe": () => (/* binding */ __wbg_uniform3f_575d1536c25b01fe),
/* harmony export */   "__wbg_newwithlength_78dc302d31527318": () => (/* binding */ __wbg_newwithlength_78dc302d31527318),
/* harmony export */   "__wbg_readPixels_3d9330105a907e24": () => (/* binding */ __wbg_readPixels_3d9330105a907e24),
/* harmony export */   "__wbg_newwithlength_32e49b6968aa9cf2": () => (/* binding */ __wbg_newwithlength_32e49b6968aa9cf2),
/* harmony export */   "__wbg_length_37270b84c9a37bef": () => (/* binding */ __wbg_length_37270b84c9a37bef),
/* harmony export */   "__wbg_set_5506d41c201b4cf9": () => (/* binding */ __wbg_set_5506d41c201b4cf9),
/* harmony export */   "__wbg_newwithlength_d7279859bc8b7a9a": () => (/* binding */ __wbg_newwithlength_d7279859bc8b7a9a),
/* harmony export */   "__wbg_length_329ad67a742437ad": () => (/* binding */ __wbg_length_329ad67a742437ad),
/* harmony export */   "__wbg_set_ebaacd220d944f77": () => (/* binding */ __wbg_set_ebaacd220d944f77),
/* harmony export */   "__wbg_newwithlength_70ad5c42e1ce6181": () => (/* binding */ __wbg_newwithlength_70ad5c42e1ce6181),
/* harmony export */   "__wbg_length_07eaac172e006183": () => (/* binding */ __wbg_length_07eaac172e006183),
/* harmony export */   "__wbg_set_531672550781c6cf": () => (/* binding */ __wbg_set_531672550781c6cf),
/* harmony export */   "__wbg_deleteFramebuffer_867aba8474910f62": () => (/* binding */ __wbg_deleteFramebuffer_867aba8474910f62),
/* harmony export */   "__wbg_width_5843e31ec081f978": () => (/* binding */ __wbg_width_5843e31ec081f978),
/* harmony export */   "__wbg_height_872c06b1bc666dd9": () => (/* binding */ __wbg_height_872c06b1bc666dd9),
/* harmony export */   "__wbg_response_4e0c2c1b8f32e827": () => (/* binding */ __wbg_response_4e0c2c1b8f32e827),
/* harmony export */   "__wbg_responseURL_af1ada560f8a25c6": () => (/* binding */ __wbg_responseURL_af1ada560f8a25c6),
/* harmony export */   "__wbg_new_59cb74e423758ede": () => (/* binding */ __wbg_new_59cb74e423758ede),
/* harmony export */   "__wbg_stack_558ba5917b466edd": () => (/* binding */ __wbg_stack_558ba5917b466edd),
/* harmony export */   "__wbg_error_4bb6c2a97407129a": () => (/* binding */ __wbg_error_4bb6c2a97407129a),
/* harmony export */   "__wbg_deleteTexture_1affe310edd12b75": () => (/* binding */ __wbg_deleteTexture_1affe310edd12b75),
/* harmony export */   "__wbg_deleteVertexArray_0a2982a2491f4fa9": () => (/* binding */ __wbg_deleteVertexArray_0a2982a2491f4fa9),
/* harmony export */   "__wbg_disableVertexAttribArray_f13a5786686fd68f": () => (/* binding */ __wbg_disableVertexAttribArray_f13a5786686fd68f),
/* harmony export */   "__wbg_self_05c54dcacb623b9a": () => (/* binding */ __wbg_self_05c54dcacb623b9a),
/* harmony export */   "__wbg_window_9777ce446d12989f": () => (/* binding */ __wbg_window_9777ce446d12989f),
/* harmony export */   "__wbg_globalThis_f0ca0bbb0149cf3d": () => (/* binding */ __wbg_globalThis_f0ca0bbb0149cf3d),
/* harmony export */   "__wbg_global_c3c8325ae8c7f1a9": () => (/* binding */ __wbg_global_c3c8325ae8c7f1a9),
/* harmony export */   "__wbindgen_is_undefined": () => (/* binding */ __wbindgen_is_undefined),
/* harmony export */   "__wbg_newnoargs_3efc7bfa69a681f9": () => (/* binding */ __wbg_newnoargs_3efc7bfa69a681f9),
/* harmony export */   "__wbg_call_cb478d88f3068c91": () => (/* binding */ __wbg_call_cb478d88f3068c91),
/* harmony export */   "__wbg_length_317f0dd77f7a6673": () => (/* binding */ __wbg_length_317f0dd77f7a6673),
/* harmony export */   "__wbg_set_4a5072a31008e0cb": () => (/* binding */ __wbg_set_4a5072a31008e0cb),
/* harmony export */   "__wbg_newwithbyteoffsetandlength_9eb3327abeac2c52": () => (/* binding */ __wbg_newwithbyteoffsetandlength_9eb3327abeac2c52),
/* harmony export */   "__wbg_newwithbyteoffsetandlength_ab2b53c614369e0e": () => (/* binding */ __wbg_newwithbyteoffsetandlength_ab2b53c614369e0e),
/* harmony export */   "__wbindgen_debug_string": () => (/* binding */ __wbindgen_debug_string),
/* harmony export */   "__wbg_blendFunc_d2d37c0919e2221c": () => (/* binding */ __wbg_blendFunc_d2d37c0919e2221c),
/* harmony export */   "__wbg_open_d71122b8786bb048": () => (/* binding */ __wbg_open_d71122b8786bb048),
/* harmony export */   "__wbg_setonload_9871733840c353bb": () => (/* binding */ __wbg_setonload_9871733840c353bb),
/* harmony export */   "__wbg_setonerror_cb5c65763e1a60d2": () => (/* binding */ __wbg_setonerror_cb5c65763e1a60d2),
/* harmony export */   "__wbg_send_03c8d891bc24da59": () => (/* binding */ __wbg_send_03c8d891bc24da59),
/* harmony export */   "__wbg_texSubImage2D_ff84854054ae247f": () => (/* binding */ __wbg_texSubImage2D_ff84854054ae247f),
/* harmony export */   "__wbindgen_throw": () => (/* binding */ __wbindgen_throw),
/* harmony export */   "__wbindgen_rethrow": () => (/* binding */ __wbindgen_rethrow),
/* harmony export */   "__wbg_instanceof_Window_9c4fd26090e1d029": () => (/* binding */ __wbg_instanceof_Window_9c4fd26090e1d029),
/* harmony export */   "__wbindgen_closure_wrapper359": () => (/* binding */ __wbindgen_closure_wrapper359),
/* harmony export */   "__wbindgen_closure_wrapper412": () => (/* binding */ __wbindgen_closure_wrapper412)
/* harmony export */ });
/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ "./src/core/pkg/index_bg.wasm");
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var TextEncoder = __webpack_require__(/*! text-encoding */ "./node_modules/text-encoding/index.js")["TextEncoder"];
/* provided dependency */ var TextDecoder = __webpack_require__(/*! text-encoding */ "./node_modules/text-encoding/index.js")["TextDecoder"];


const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');

    heap[idx] = obj;
    return idx;
}

let WASM_VECTOR_LEN = 0;

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
    }
    return cachegetUint8Memory0;
}

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (typeof(arg) !== 'string') throw new Error('expected a string argument');

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);
        if (ret.read !== arg.length) throw new Error('failed to pass whole string');
        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error('expected a number argument');
}

let cachegetFloat64Memory0 = null;
function getFloat64Memory0() {
    if (cachegetFloat64Memory0 === null || cachegetFloat64Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
        cachegetFloat64Memory0 = new Float64Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
    }
    return cachegetFloat64Memory0;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function _assertBoolean(n) {
    if (typeof(n) !== 'boolean') {
        throw new Error('expected a boolean argument');
    }
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_export_2.get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}

function logError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            let error = (function () {
                try {
                    return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
                } catch(_) {
                    return "<failed to stringify thrown value>";
                }
            }());
            console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
            throw e;
        }
    };
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}
function __wbg_adapter_28(arg0, arg1, arg2) {
    try {
        _assertNum(arg0);
        _assertNum(arg1);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5090c4f0fb4e395d(arg0, arg1, addBorrowedObject(arg2));
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

function makeClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        try {
            return f(state.a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_export_2.get(state.dtor)(state.a, state.b);
                state.a = 0;

            }
        }
    };
    real.original = state;

    return real;
}
function __wbg_adapter_31(arg0, arg1) {
    _assertNum(arg0);
    _assertNum(arg1);
    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__._dyn_core__ops__function__Fn_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he96538bb69e94e62(arg0, arg1);
}

let cachegetUint32Memory0 = null;
function getUint32Memory0() {
    if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
        cachegetUint32Memory0 = new Uint32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
    }
    return cachegetUint32Memory0;
}

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4);
    const mem = getUint32Memory0();
    for (let i = 0; i < array.length; i++) {
        mem[ptr / 4 + i] = addHeapObject(array[i]);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}

function getArrayF64FromWasm0(ptr, len) {
    return getFloat64Memory0().subarray(ptr / 8, ptr / 8 + len);
}
/**
* @returns {number}
*/
function GALCooSys() {
    var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.GALCooSys();
    return ret >>> 0;
}

/**
* @returns {number}
*/
function ICRSJ2000CooSys() {
    var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.ICRSJ2000CooSys();
    return ret >>> 0;
}

function handleError(f) {
    return function () {
        try {
            return f.apply(this, arguments);

        } catch (e) {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_exn_store(addHeapObject(e));
        }
    };
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachegetFloat32Memory0 = null;
function getFloat32Memory0() {
    if (cachegetFloat32Memory0 === null || cachegetFloat32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer) {
        cachegetFloat32Memory0 = new Float32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
    }
    return cachegetFloat32Memory0;
}

function getArrayF32FromWasm0(ptr, len) {
    return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
/**
*/
const CooSystem = Object.freeze({ ICRSJ2000:0,"0":"ICRSJ2000",GAL:1,"1":"GAL", });
/**
*/
class WebClient {

    static __wrap(ptr) {
        const obj = Object.create(WebClient.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbg_webclient_free(ptr);
    }
    /**
    * Create the Aladin Lite webgl backend
    *
    * # Arguments
    *
    * * `aladin_div_name` - The name of the div where aladin is created
    * * `shaders` - The list of shader objects containing the GLSL code source
    * * `resources` - Image resource files
    * @param {string} aladin_div_name
    * @param {any} shaders
    * @param {any} resources
    */
    constructor(aladin_div_name, shaders, resources) {
        try {
            var ptr0 = passStringToWasm0(aladin_div_name, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_new(ptr0, len0, addBorrowedObject(shaders), addBorrowedObject(resources));
            return WebClient.__wrap(ret);
        } finally {
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * Update the view
    *
    * # Arguments
    *
    * * `dt` - The time elapsed from the last frame update
    * * `force` - This parameter ensures to force the update of some elements
    *   even if the camera has not moved
    * @param {number} dt
    * @param {boolean} force
    */
    update(dt, force) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _assertBoolean(force);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_update(this.ptr, dt, force);
    }
    /**
    * Resize the window
    *
    * # Arguments
    *
    * * `width` - The width in pixels of the view
    * * `height` - The height in pixels of the view
    * @param {number} width
    * @param {number} height
    */
    resize(width, height) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_resize(this.ptr, width, height);
    }
    /**
    * Render the frame to the canvas
    *
    * The rendering does not redraw the scene if nothing has changed
    *
    * # Arguments
    *
    * * `force` - Force the rendering of the frame
    * @param {boolean} force
    */
    render(force) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _assertBoolean(force);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_render(this.ptr, force);
    }
    /**
    * Set the type of projections
    *
    * # Arguments
    *
    * * `name` - Can be aitoff, mollweide, arc, sinus, tan or mercator
    * @param {string} name
    */
    setProjection(name) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passStringToWasm0(name, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_setProjection(this.ptr, ptr0, len0);
    }
    /**
    * Reverse the longitude axis
    *
    * # Arguments
    *
    * * `reversed` - set it to `false` for planetary surveys, `true` for spatial ones
    * @param {boolean} reversed
    */
    setLongitudeReversed(reversed) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _assertBoolean(reversed);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_setLongitudeReversed(this.ptr, reversed);
    }
    /**
    * Check whether the app is ready
    *
    * Aladin Lite is in a good state when the root tiles of the
    * HiPS chosen have all been retrieved and accessible for the GPU
    *
    * Surveys can be changed only if Aladin Lite is ready
    * @returns {boolean}
    */
    isReady() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_isReady(this.ptr);
        return ret !== 0;
    }
    /**
    * Set new image surveys
    *
    * Send the image surveys to render inside the Aladin Lite view
    *
    * # Arguments
    *
    * * `surveys` - A list/array of survey. A survey is a javascript object
    * having the specific form. Please check the file in core/src/hips.rs to see
    * the different semantics accepted.
    *
    * # Examples
    *
    * ```javascript
    * let al = new Aladin.wasmLibs.webgl.WebClient(...);
    * const panstarrs = {
    *     layer: 'base',
    *     properties: {
    *         url: "http://alasky.u-strasbg.fr/Pan-STARRS/DR1/r",
    *
    *         maxOrder: 11,
    *         frame: { label: "J2000", system: "J2000" },
    *         tileSize: 512,
    *         format: {
    *             FITSImage: {
    *                 bitpix: 16,
    *             }
    *         },
    *         minCutout: -0.15,
    *         maxCutout: 5,
    *     },
    *     color: {
    *         Grayscale2Colormap: {
    *             colormap: "RedTemperature",
    *             transfer: "asinh",
    *             reversed: false,
    *         }
    *     },
    * };
    * al.setImageSurveys([panstarrs]);
    * ```
    *
    * # Panics
    *
    * * If the surveys do not match SimpleHiPS type
    * * If the number of surveys is greater than 4. For the moment, due to the limitations
    *   of WebGL2 texture units on some architectures, the total number of surveys rendered is
    *   limited to 4.
    * @param {any[]} surveys
    */
    setImageSurveys(surveys) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passArrayJsValueToWasm0(surveys, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_setImageSurveys(this.ptr, ptr0, len0);
    }
    /**
    * Move a layer forward the other ones
    *
    * # Arguments
    *
    * * `layer_name` - The name of the layer to move
    *
    * # Panics
    *
    * * If the layer specified is not found
    * @param {string} layer_name
    */
    moveImageSurveysLayerForward(layer_name) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passStringToWasm0(layer_name, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_moveImageSurveysLayerForward(this.ptr, ptr0, len0);
    }
    /**
    * Set the opacity of a layer
    *
    * # Arguments
    *
    * * `opacity` - Set an opacity value (between 0.0 and 1.0)
    * * `layer_name` - The name of the layer to move
    *
    * # Panics
    *
    * * If the layer specified is not found
    * @param {number} opacity
    * @param {string} layer_name
    */
    setOpacityLayer(opacity, layer_name) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passStringToWasm0(layer_name, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_setOpacityLayer(this.ptr, opacity, ptr0, len0);
    }
    /**
    * Set the equatorial grid color
    *
    * # Arguments
    *
    * * `red` - Red amount (between 0.0 and 1.0)
    * * `green` - Green amount (between 0.0 and 1.0)
    * * `blue` - Blue amount (between 0.0 and 1.0)
    * * `alpha` - Alpha amount (between 0.0 and 1.0)
    * @param {number} red
    * @param {number} green
    * @param {number} blue
    * @param {number} alpha
    */
    setGridColor(red, green, blue, alpha) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_setGridColor(this.ptr, red, green, blue, alpha);
    }
    /**
    * Enable the rendering of the equatorial grid
    */
    enableGrid() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_enableGrid(this.ptr);
    }
    /**
    * Disable the rendering of the equatorial grid
    */
    disableGrid() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_disableGrid(this.ptr);
    }
    /**
    * Enable the rendering of the equatorial grid labels
    */
    hideGridLabels() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_hideGridLabels(this.ptr);
    }
    /**
    * Disable the rendering of the equatorial grid labels
    */
    showGridLabels() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_showGridLabels(this.ptr);
    }
    /**
    * Get the coordinate system of the view
    *
    * Returns either ICRSJ2000 or GAL
    * @returns {number}
    */
    cooSystem() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_cooSystem(this.ptr);
        return ret >>> 0;
    }
    /**
    * Set the coordinate system for the view
    *
    * # Arguments
    *
    * * `coo_system` - The coordinate system
    * @param {number} coo_system
    */
    setCooSystem(coo_system) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _assertNum(coo_system);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_setCooSystem(this.ptr, coo_system);
    }
    /**
    * Convert a j2000 lonlat to a galactic one
    *
    * # Arguments
    *
    * * `lon` - A longitude in degrees
    * * `lat` - A latitude in degrees
    * @param {number} lon
    * @param {number} lat
    * @returns {Float64Array | undefined}
    */
    J20002Gal(lon, lat) {
        try {
            if (this.ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _assertNum(this.ptr);
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_J20002Gal(retptr, this.ptr, lon, lat);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayF64FromWasm0(r0, r1).slice();
                _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1 * 8);
            }
            return v0;
        } finally {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * Convert a galactic lonlat to a j2000 one
    *
    * # Arguments
    *
    * * `lon` - A longitude in degrees
    * * `lat` - A latitude in degrees
    * @param {number} lon
    * @param {number} lat
    * @returns {Float64Array | undefined}
    */
    Gal2J2000(lon, lat) {
        try {
            if (this.ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _assertNum(this.ptr);
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_Gal2J2000(retptr, this.ptr, lon, lat);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayF64FromWasm0(r0, r1).slice();
                _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1 * 8);
            }
            return v0;
        } finally {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * Get the field of the view in degrees
    * @returns {number}
    */
    getFieldOfView() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_getFieldOfView(this.ptr);
        return ret;
    }
    /**
    * Set the field of view
    *
    * # Arguments
    *
    * * `fov` - The field of view in degrees
    * @param {number} fov
    */
    setFieldOfView(fov) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_setFieldOfView(this.ptr, fov);
    }
    /**
    * Set the absolute orientation of the view
    *
    * # Arguments
    *
    * * `theta` - The rotation angle in degrees
    * @param {number} theta
    */
    setRotationAroundCenter(theta) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_setRotationAroundCenter(this.ptr, theta);
    }
    /**
    * Get the absolute orientation angle of the view
    * @returns {number}
    */
    getRotationAroundCenter() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_getRotationAroundCenter(this.ptr);
        return ret;
    }
    /**
    * Get the field of view angle value when the view is zoomed out to its maximum
    *
    * This method is dependent of the projection currently set.
    * All sky projections should return 360 degrees whereas
    * the sinus would be 180 degrees.
    * @returns {number}
    */
    getMaxFieldOfView() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_getMaxFieldOfView(this.ptr);
        return ret;
    }
    /**
    * Get the clip zoom factor of the view
    *
    * This factor is deduced from the field of view angle.
    * It is a constant which when multiplied to the screen coordinates
    * gives the coordinates in clipping space.
    * @returns {number}
    */
    getClipZoomFactor() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_getClipZoomFactor(this.ptr);
        return ret;
    }
    /**
    * Set the center of the view
    *
    * The core works in ICRS system so
    * the location must be given in this system
    *
    * # Arguments
    *
    * * `lon` - A longitude in degrees
    * * `lat` - A latitude in degrees
    * @param {number} lon
    * @param {number} lat
    */
    setCenter(lon, lat) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_setCenter(this.ptr, lon, lat);
    }
    /**
    * Get the center of the view
    *
    * This returns a javascript array of size 2.
    * The first component is the longitude, the second one is the latitude.
    * The angles are given in degrees.
    * @returns {Float64Array}
    */
    getCenter() {
        try {
            if (this.ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _assertNum(this.ptr);
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_getCenter(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayF64FromWasm0(r0, r1).slice();
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1 * 8);
            return v0;
        } finally {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * Rest the north pole orientation to the top of the screen
    */
    resetNorthOrientation() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_resetNorthOrientation(this.ptr);
    }
    /**
    * Move to a location
    *
    * The core works in ICRS system so
    * the location must be given in this system
    *
    * # Arguments
    *
    * * `lon` - A longitude in degrees
    * * `lat` - A latitude in degrees
    * @param {number} lon
    * @param {number} lat
    */
    moveToLocation(lon, lat) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_moveToLocation(this.ptr, lon, lat);
    }
    /**
    * Go from a location to another one
    *
    * # Arguments
    *
    * * `s1x` - The x screen coordinate in pixels of the starting point
    * * `s1y` - The y screen coordinate in pixels of the starting point
    * * `s2x` - The x screen coordinate in pixels of the goal point
    * * `s2y` - The y screen coordinate in pixels of the goal point
    * @param {number} s1x
    * @param {number} s1y
    * @param {number} s2x
    * @param {number} s2y
    */
    goFromTo(s1x, s1y, s2x, s2y) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_goFromTo(this.ptr, s1x, s1y, s2x, s2y);
    }
    /**
    * World to screen projection
    *
    * Coordinates must be given in the ICRS coo system
    *
    * # Arguments
    *
    * * `lon` - A longitude in degrees
    * * `lat` - A latitude in degrees
    * @param {number} lon
    * @param {number} lat
    * @returns {Float64Array | undefined}
    */
    worldToScreen(lon, lat) {
        try {
            if (this.ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _assertNum(this.ptr);
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_worldToScreen(retptr, this.ptr, lon, lat);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayF64FromWasm0(r0, r1).slice();
                _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1 * 8);
            }
            return v0;
        } finally {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * World to screen projection of a list of sources
    *
    * Coordinates must be given in the ICRS coo system
    *
    * # Arguments
    *
    * * `sources` - An array of sources
    * @param {any[]} sources
    * @returns {Float64Array}
    */
    worldToScreenVec(sources) {
        try {
            if (this.ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _assertNum(this.ptr);
            var ptr0 = passArrayJsValueToWasm0(sources, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc);
            var len0 = WASM_VECTOR_LEN;
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_worldToScreenVec(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v1 = getArrayF64FromWasm0(r0, r1).slice();
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1 * 8);
            return v1;
        } finally {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * Screen to world unprojection
    *
    * # Arguments
    *
    * * `pos_x` - The x screen coordinate in pixels
    * * `pos_y` - The y screen coordinate in pixels
    * @param {number} pos_x
    * @param {number} pos_y
    * @returns {Float64Array | undefined}
    */
    screenToWorld(pos_x, pos_y) {
        try {
            if (this.ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _assertNum(this.ptr);
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_screenToWorld(retptr, this.ptr, pos_x, pos_y);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayF64FromWasm0(r0, r1).slice();
                _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1 * 8);
            }
            return v0;
        } finally {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * Signal the backend when the left mouse button has been released.
    *
    * This is useful for beginning inerting.
    */
    releaseLeftButtonMouse() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_releaseLeftButtonMouse(this.ptr);
    }
    /**
    * Signal the backend when the left mouse button has been pressed.
    */
    pressLeftMouseButton() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_pressLeftMouseButton(this.ptr);
    }
    /**
    * Signal the backend when a wheel event has been registered
    *
    * The field of view is changed accordingly
    *
    * # Arguments
    *
    * * `delta` - The delta coming from the wheel event. This is
    *   used to know if we are zooming or not.
    * @param {number} delta
    */
    registerWheelEvent(delta) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_registerWheelEvent(this.ptr, delta);
    }
    /**
    * Add a catalog rendered as a heatmap.
    *
    * # Arguments
    *
    * * `name_catalog` - The name of the catalog
    * * `data` - The list of the catalog sources.
    * * `colormap` - The name of the colormap. Check out the list of possible colormaps names `getAvailableColormapList`.
    * @param {string} name_catalog
    * @param {any} data
    * @param {string} colormap
    */
    addCatalog(name_catalog, data, colormap) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passStringToWasm0(name_catalog, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(colormap, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_addCatalog(this.ptr, ptr0, len0, addHeapObject(data), ptr1, len1);
    }
    /**
    * Set the catalog heatmap colormap
    *
    * # Arguments
    *
    * * `name_catalog` - The name of the catalog to apply this change to
    * * `colormap` - The name of the colormap. Check out the list of possible colormaps names `getAvailableColormapList`.
    *
    * # Panics
    *
    * If the catalog has not been found
    * @returns {boolean}
    */
    isCatalogLoaded() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_isCatalogLoaded(this.ptr);
        return ret !== 0;
    }
    /**
    * Set the catalog heatmap colormap
    *
    * # Arguments
    *
    * * `name_catalog` - The name of the catalog to apply this change to
    * * `colormap` - The name of the colormap. Check out the list of possible colormaps names `getAvailableColormapList`.
    *
    * # Panics
    *
    * If the catalog has not been found
    * @param {string} name_catalog
    * @param {string} colormap
    */
    setCatalogColormap(name_catalog, colormap) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passStringToWasm0(name_catalog, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(colormap, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_setCatalogColormap(this.ptr, ptr0, len0, ptr1, len1);
    }
    /**
    * Set the catalog heatmap opacity
    *
    * # Arguments
    *
    * * `name_catalog` - The name of the catalog to apply this change to
    * * `opacity` - The opacity factor (between 0.0 and 1.0)
    *
    * # Panics
    *
    * If the catalog has not been found
    * @param {string} name_catalog
    * @param {number} opacity
    */
    setCatalogOpacity(name_catalog, opacity) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passStringToWasm0(name_catalog, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_setCatalogOpacity(this.ptr, ptr0, len0, opacity);
    }
    /**
    * Set the kernel strength for the catalog heatmap rendering
    *
    * # Arguments
    *
    * * `name_catalog` - The name of the catalog to apply this change to
    * * `strength` - The strength of the kernel
    *
    * # Panics
    *
    * If the catalog has not been found
    * @param {string} name_catalog
    * @param {number} strength
    */
    setCatalogKernelStrength(name_catalog, strength) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passStringToWasm0(name_catalog, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_setCatalogKernelStrength(this.ptr, ptr0, len0, strength);
    }
    /**
    * Project a line to the screen
    *
    * # Returns
    *
    * A list of xy screen coordinates defining the projected line.
    * The algorithm involved is recursive and can return different number of
    * control points depending on the projection used and therefore
    * the deformation of the line.
    *
    * # Arguments
    *
    * * `lon1` - The longitude in degrees of the starting line point
    * * `lat1` - The latitude in degrees of the starting line point
    * * `lon2` - The longitude in degrees of the ending line point
    * * `lat2` - The latitude in degrees of the ending line point
    * @param {number} lon1
    * @param {number} lat1
    * @param {number} lon2
    * @param {number} lat2
    * @returns {Float64Array}
    */
    projectLine(lon1, lat1, lon2, lat2) {
        try {
            if (this.ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(-16);
            _assertNum(this.ptr);
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_projectLine(retptr, this.ptr, lon1, lat1, lon2, lat2);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayF64FromWasm0(r0, r1).slice();
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(r0, r1 * 8);
            return v0;
        } finally {
            _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * Get the list of colormap supported
    *
    * This list must be updated whenever a new colormap is added
    * in core/img/colormaps/colormaps.png
    * @returns {any}
    */
    getAvailableColormapList() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_getAvailableColormapList(this.ptr);
        return takeObject(ret);
    }
    /**
    * Get the image canvas where the webgl rendering is done
    * @returns {object | undefined}
    */
    canvas() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_canvas(this.ptr);
        return takeObject(ret);
    }
    /**
    * Read the pixel value
    *
    * The current implementation only returns the pixel value
    * of the first survey of the `layer` specified.
    *
    * # Returns
    *
    * - An array of 3 items (rgb) for JPG tiles
    * - An array of 4 items (rgba) for PNG tiles
    * - A single value for FITS tiles
    *
    * # Arguments
    *
    * * `x` - The x screen coordinate in pixels
    * * `y` - The y screen coordinate in pixels
    * * `layer` - The name of the layer to read the pixel from.
    * @param {number} x
    * @param {number} y
    * @param {string} layer
    * @returns {any}
    */
    readPixel(x, y, layer) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        var ptr0 = passStringToWasm0(layer, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.webclient_readPixel(this.ptr, x, y, ptr0, len0);
        return takeObject(ret);
    }
}

const __wbg_canvas_8c9f75f2d1654dc6 = logError(function(arg0) {
    var ret = getObject(arg0).canvas;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_instanceof_HtmlCanvasElement_e0e251da2aa0b541 = logError(function(arg0) {
    var ret = getObject(arg0) instanceof HTMLCanvasElement;
    _assertBoolean(ret);
    return ret;
});

const __wbg_setwidth_fd251e9da5abcced = logError(function(arg0, arg1) {
    getObject(arg0).width = arg1 >>> 0;
});

const __wbg_setheight_5b882973e84fa13c = logError(function(arg0, arg1) {
    getObject(arg0).height = arg1 >>> 0;
});

const __wbg_viewport_778271db50cd72a0 = logError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).viewport(arg1, arg2, arg3, arg4);
});

const __wbg_scissor_1b3bb8361889e729 = logError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).scissor(arg1, arg2, arg3, arg4);
});

const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

const __wbindgen_memory = function() {
    var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory;
    return addHeapObject(ret);
};

const __wbg_buffer_ebc6c8e75510eae3 = logError(function(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
});

const __wbg_new_cc5264f47906c023 = logError(function(arg0) {
    var ret = new Float32Array(getObject(arg0));
    return addHeapObject(ret);
});

const __wbg_subarray_e31c6125926e9ce6 = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
});

const __wbg_measureText_8c14bb26761d3435 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).measureText(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

const __wbg_width_9c3c9e775c405aaa = logError(function(arg0) {
    var ret = getObject(arg0).width;
    return ret;
});

const __wbg_bindVertexArray_808c39d3c0f17264 = logError(function(arg0, arg1) {
    getObject(arg0).bindVertexArray(getObject(arg1));
});

const __wbg_bindBuffer_5f5c4d38f5589af4 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));
});

const __wbg_bufferData_17091aec18ec51c8 = logError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);
});

const __wbg_bufferSubData_c06ea806212e9c9a = logError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).bufferSubData(arg1 >>> 0, arg2, getObject(arg3));
});

const __wbindgen_json_serialize = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = JSON.stringify(obj === undefined ? null : obj);
    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

const __wbg_performance_e029cf47e1c47c09 = logError(function(arg0) {
    var ret = getObject(arg0).performance;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_now_4abbca4ef2aba8d6 = logError(function(arg0) {
    var ret = getObject(arg0).now();
    return ret;
});

const __wbg_bindTexture_f2a0487a487a78d9 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).bindTexture(arg1 >>> 0, getObject(arg2));
});

const __wbg_texSubImage2D_bbb93a1e54213fd8 = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
    getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, getObject(arg9));
});

const __wbg_blendFuncSeparate_5d0edb84373f725b = logError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
});

const __wbg_enable_f00191ae560ac9ef = logError(function(arg0, arg1) {
    getObject(arg0).enable(arg1 >>> 0);
});

const __wbg_cullFace_af5db4e693f7ce67 = logError(function(arg0, arg1) {
    getObject(arg0).cullFace(arg1 >>> 0);
});

const __wbg_innerWidth_2bb09626230de7ba = handleError(function(arg0) {
    var ret = getObject(arg0).innerWidth;
    return addHeapObject(ret);
});

const __wbindgen_number_get = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = typeof(obj) === 'number' ? obj : undefined;
    if (!isLikeNone(ret)) {
        _assertNum(ret);
    }
    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
};

const __wbg_innerHeight_e73b06bc6aaff2f6 = handleError(function(arg0) {
    var ret = getObject(arg0).innerHeight;
    return addHeapObject(ret);
});

const __wbg_new_0891fac076d9e6b3 = handleError(function() {
    var ret = new Image();
    return addHeapObject(ret);
});

const __wbg_setcrossOrigin_805465e7e13f5c9e = logError(function(arg0, arg1, arg2) {
    getObject(arg0).crossOrigin = arg1 === 0 ? undefined : getStringFromWasm0(arg1, arg2);
});

const __wbg_new_ca68351634a50de4 = handleError(function() {
    var ret = new XMLHttpRequest();
    return addHeapObject(ret);
});

const __wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

const __wbg_setresponseType_165b92939d652606 = logError(function(arg0, arg1) {
    getObject(arg0).responseType = takeObject(arg1);
});

const __wbg_createFramebuffer_7fd863d54241be81 = logError(function(arg0) {
    var ret = getObject(arg0).createFramebuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_bindFramebuffer_ce3cfcfec4aa02cc = logError(function(arg0, arg1, arg2) {
    getObject(arg0).bindFramebuffer(arg1 >>> 0, getObject(arg2));
});

const __wbg_framebufferTexture2D_9a77a023fd4aedcc = logError(function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, getObject(arg4), arg5);
});

const __wbg_createVertexArray_855d59250230c563 = logError(function(arg0) {
    var ret = getObject(arg0).createVertexArray();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_useProgram_0c20a8b7d005f144 = logError(function(arg0, arg1) {
    getObject(arg0).useProgram(getObject(arg1));
});

const __wbg_createBuffer_8040ad276d5ed8bb = logError(function(arg0) {
    var ret = getObject(arg0).createBuffer();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_lineWidth_284ed95bb46ea0ad = logError(function(arg0, arg1) {
    getObject(arg0).lineWidth(arg1);
});

const __wbg_vertexAttribPointer_a82a34dbb0332fd7 = logError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
});

const __wbg_enableVertexAttribArray_288f04a5fcb818df = logError(function(arg0, arg1) {
    getObject(arg0).enableVertexAttribArray(arg1 >>> 0);
});

const __wbg_document_249e9cf340780f93 = logError(function(arg0) {
    var ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_getElementById_2ee254bbb67b6ae1 = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_getElementsByClassName_72e63c7a1766ad3c = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getElementsByClassName(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
});

const __wbg_getwithindex_78954e8b63abb0b8 = logError(function(arg0, arg1) {
    var ret = getObject(arg0)[arg1 >>> 0];
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_setAttribute_0b50656f1ccc45bf = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
});

const __wbg_getContext_d778ffc8203f64ae = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_instanceof_CanvasRenderingContext2d_eea9cd931eb496b7 = logError(function(arg0) {
    var ret = getObject(arg0) instanceof CanvasRenderingContext2D;
    _assertBoolean(ret);
    return ret;
});

const __wbg_scale_8d56361ac5b8a5b2 = handleError(function(arg0, arg1, arg2) {
    getObject(arg0).scale(arg1, arg2);
});

const __wbg_createTexture_a46f881a1c96b496 = logError(function(arg0) {
    var ret = getObject(arg0).createTexture();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
};

const __wbg_setonload_5f47f8356794f80d = logError(function(arg0, arg1) {
    getObject(arg0).onload = getObject(arg1);
});

const __wbg_setonerror_13ea4e722e360e2e = logError(function(arg0, arg1) {
    getObject(arg0).onerror = getObject(arg1);
});

const __wbg_setsrc_21ed0b40d0ff0413 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).src = getStringFromWasm0(arg1, arg2);
});

const __wbg_texParameteri_e99b48aa90ae569b = logError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
});

const __wbg_texImage2D_654258ac4b9951ec = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).texImage2D(arg1 >>> 0, arg2, arg3, arg4 >>> 0, arg5 >>> 0, getObject(arg6));
});

const __wbg_log_a39f164b49616cb0 = logError(function(arg0, arg1) {
    console.log(getStringFromWasm0(arg0, arg1));
});

const __wbg_texImage2D_173d216c50e54701 = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
    getObject(arg0).texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9 === 0 ? undefined : getArrayU8FromWasm0(arg9, arg10));
});

const __wbg_newwithbyteoffsetandlength_4817f1ce0d00c81c = logError(function(arg0, arg1, arg2) {
    var ret = new Int32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
});

const __wbg_new_5c2190a641284929 = logError(function(arg0) {
    var ret = new Int32Array(getObject(arg0));
    return addHeapObject(ret);
});

const __wbg_newwithbyteoffsetandlength_ca3d3d8811ecb569 = logError(function(arg0, arg1, arg2) {
    var ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
});

const __wbg_new_135e963dedf67b22 = logError(function(arg0) {
    var ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
});

const __wbg_newwithbyteoffsetandlength_eaa671c25ed287c1 = logError(function(arg0, arg1, arg2) {
    var ret = new Int16Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
});

const __wbg_new_3e986ca39e7a9239 = logError(function(arg0) {
    var ret = new Int16Array(getObject(arg0));
    return addHeapObject(ret);
});

const __wbg_vertexAttribDivisor_cfecf0168fd7a829 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).vertexAttribDivisor(arg1 >>> 0, arg2 >>> 0);
});

const __wbg_deleteBuffer_141aad9214e589cd = logError(function(arg0, arg1) {
    getObject(arg0).deleteBuffer(getObject(arg1));
});

const __wbg_createProgram_1de639d74a7834a3 = logError(function(arg0) {
    var ret = getObject(arg0).createProgram();
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_attachShader_f53ba6bf356e9757 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).attachShader(getObject(arg1), getObject(arg2));
});

const __wbg_linkProgram_1b0f85f4af978d39 = logError(function(arg0, arg1) {
    getObject(arg0).linkProgram(getObject(arg1));
});

const __wbg_getProgramParameter_98987a4367faf22d = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
});

const __wbindgen_boolean_get = function(arg0) {
    const v = getObject(arg0);
    var ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
    _assertNum(ret);
    return ret;
};

const __wbg_getProgramInfoLog_4e8efab14b80a4f3 = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg1).getProgramInfoLog(getObject(arg2));
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

const __wbg_getActiveUniform_d38641d1e6282920 = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getActiveUniform(getObject(arg1), arg2 >>> 0);
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_name_a4114218825a59b3 = logError(function(arg0, arg1) {
    var ret = getObject(arg1).name;
    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

const __wbg_getUniformLocation_abc33d49b1c6adc6 = logError(function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).getUniformLocation(getObject(arg1), getStringFromWasm0(arg2, arg3));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_createShader_f0fb93d33a5832a3 = logError(function(arg0, arg1) {
    var ret = getObject(arg0).createShader(arg1 >>> 0);
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_shaderSource_ed7a4aff709aac74 = logError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).shaderSource(getObject(arg1), getStringFromWasm0(arg2, arg3));
});

const __wbg_compileShader_42ca15ab42f3bc4e = logError(function(arg0, arg1) {
    getObject(arg0).compileShader(getObject(arg1));
});

const __wbg_getShaderParameter_3760f3569c62d1c2 = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0);
    return addHeapObject(ret);
});

const __wbg_getShaderInfoLog_e5f754825af7ee35 = logError(function(arg0, arg1, arg2) {
    var ret = getObject(arg1).getShaderInfoLog(getObject(arg2));
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

const __wbg_clearColor_00475fe36f61a856 = logError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).clearColor(arg1, arg2, arg3, arg4);
});

const __wbg_clear_30e4727c6176f315 = logError(function(arg0, arg1) {
    getObject(arg0).clear(arg1 >>> 0);
});

const __wbg_width_1765e13e0099f9cf = logError(function(arg0) {
    var ret = getObject(arg0).width;
    _assertNum(ret);
    return ret;
});

const __wbg_height_fadb4d0c1b0d38e1 = logError(function(arg0) {
    var ret = getObject(arg0).height;
    _assertNum(ret);
    return ret;
});

const __wbg_uniform1f_36ec670bb2ed1573 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).uniform1f(getObject(arg1), arg2);
});

const __wbg_uniform2f_bf470d545fdd8552 = logError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform2f(getObject(arg1), arg2, arg3);
});

const __wbg_drawElementsInstanced_8b623d1ee1b61fd1 = logError(function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).drawElementsInstanced(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
});

const __wbg_uniform1i_f4db1eaef4655b7a = logError(function(arg0, arg1, arg2) {
    getObject(arg0).uniform1i(getObject(arg1), arg2);
});

const __wbg_drawElements_82eee89b067a236a = logError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).drawElements(arg1 >>> 0, arg2, arg3 >>> 0, arg4);
});

const __wbg_uniform4f_92043581bec01bb1 = logError(function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).uniform4f(getObject(arg1), arg2, arg3, arg4, arg5);
});

const __wbg_drawArrays_84de63627695c4b0 = logError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);
});

const __wbg_clearRect_dbb56982eff2a250 = logError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).clearRect(arg1, arg2, arg3, arg4);
});

const __wbg_setfont_781d8a4777f9b05d = logError(function(arg0, arg1, arg2) {
    getObject(arg0).font = getStringFromWasm0(arg1, arg2);
});

const __wbg_settextAlign_92c91d5fffbd336b = logError(function(arg0, arg1, arg2) {
    getObject(arg0).textAlign = getStringFromWasm0(arg1, arg2);
});

const __wbg_setfillStyle_5306396b0368ba08 = logError(function(arg0, arg1) {
    getObject(arg0).fillStyle = getObject(arg1);
});

const __wbg_save_d60be08cdef5b02f = logError(function(arg0) {
    getObject(arg0).save();
});

const __wbg_translate_7d45a38726b69555 = handleError(function(arg0, arg1, arg2) {
    getObject(arg0).translate(arg1, arg2);
});

const __wbg_rotate_b5850a81741b624a = handleError(function(arg0, arg1) {
    getObject(arg0).rotate(arg1);
});

const __wbg_fillText_1a4eaffef23bd8b7 = handleError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).fillText(getStringFromWasm0(arg1, arg2), arg3, arg4);
});

const __wbg_restore_c480175de20d25ec = logError(function(arg0) {
    getObject(arg0).restore();
});

const __wbg_disable_ae6336ea122a9e25 = logError(function(arg0, arg1) {
    getObject(arg0).disable(arg1 >>> 0);
});

const __wbg_parse_13ee9d835244eb72 = handleError(function(arg0, arg1) {
    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
});

const __wbg_getContext_4678c25f580222b0 = handleError(function(arg0, arg1, arg2, arg3) {
    var ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2), getObject(arg3));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbg_instanceof_WebGl2RenderingContext_61a66a1af6516586 = logError(function(arg0) {
    var ret = getObject(arg0) instanceof WebGL2RenderingContext;
    _assertBoolean(ret);
    return ret;
});

const __wbg_getExtension_d20d9c678d874b63 = handleError(function(arg0, arg1, arg2) {
    var ret = getObject(arg0).getExtension(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
});

const __wbindgen_cb_drop = function(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    var ret = false;
    _assertBoolean(ret);
    return ret;
};

const __wbindgen_json_parse = function(arg0, arg1) {
    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

const __wbg_isArray_bccef1135dd559c1 = logError(function(arg0) {
    var ret = Array.isArray(getObject(arg0));
    _assertBoolean(ret);
    return ret;
});

const __wbg_length_450572e01ae27466 = logError(function(arg0) {
    var ret = getObject(arg0).length;
    _assertNum(ret);
    return ret;
});

const __wbg_get_f099d98ea7d68360 = logError(function(arg0, arg1) {
    var ret = getObject(arg0)[arg1 >>> 0];
    return addHeapObject(ret);
});

const __wbg_activeTexture_4b5a30aed54cdc27 = logError(function(arg0, arg1) {
    getObject(arg0).activeTexture(arg1 >>> 0);
});

const __wbg_uniform1fv_44d80c9ff70429ee = logError(function(arg0, arg1, arg2, arg3) {
    getObject(arg0).uniform1fv(getObject(arg1), getArrayF32FromWasm0(arg2, arg3));
});

const __wbg_uniformMatrix4fv_64a33f17a033cfaa = logError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniformMatrix4fv(getObject(arg1), arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
});

const __wbg_uniform3f_575d1536c25b01fe = logError(function(arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).uniform3f(getObject(arg1), arg2, arg3, arg4);
});

const __wbg_newwithlength_78dc302d31527318 = logError(function(arg0) {
    var ret = new Uint8Array(arg0 >>> 0);
    return addHeapObject(ret);
});

const __wbg_readPixels_3d9330105a907e24 = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    getObject(arg0).readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, getObject(arg7));
});

const __wbg_newwithlength_32e49b6968aa9cf2 = logError(function(arg0) {
    var ret = new Int16Array(arg0 >>> 0);
    return addHeapObject(ret);
});

const __wbg_length_37270b84c9a37bef = logError(function(arg0) {
    var ret = getObject(arg0).length;
    _assertNum(ret);
    return ret;
});

const __wbg_set_5506d41c201b4cf9 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
});

const __wbg_newwithlength_d7279859bc8b7a9a = logError(function(arg0) {
    var ret = new Int32Array(arg0 >>> 0);
    return addHeapObject(ret);
});

const __wbg_length_329ad67a742437ad = logError(function(arg0) {
    var ret = getObject(arg0).length;
    _assertNum(ret);
    return ret;
});

const __wbg_set_ebaacd220d944f77 = logError(function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
});

const __wbg_newwithlength_70ad5c42e1ce6181 = logError(function(arg0) {
    var ret = new Float32Array(arg0 >>> 0);
    return addHeapObject(ret);
});

const __wbg_length_07eaac172e006183 = logError(function(arg0) {
    var ret = getObject(arg0).length;
    _assertNum(ret);
    return ret;
});

const __wbg_set_531672550781c6cf = logError(function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
});

const __wbg_deleteFramebuffer_867aba8474910f62 = logError(function(arg0, arg1) {
    getObject(arg0).deleteFramebuffer(getObject(arg1));
});

const __wbg_width_5843e31ec081f978 = logError(function(arg0) {
    var ret = getObject(arg0).width;
    _assertNum(ret);
    return ret;
});

const __wbg_height_872c06b1bc666dd9 = logError(function(arg0) {
    var ret = getObject(arg0).height;
    _assertNum(ret);
    return ret;
});

const __wbg_response_4e0c2c1b8f32e827 = handleError(function(arg0) {
    var ret = getObject(arg0).response;
    return addHeapObject(ret);
});

const __wbg_responseURL_af1ada560f8a25c6 = logError(function(arg0, arg1) {
    var ret = getObject(arg1).responseURL;
    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

const __wbg_new_59cb74e423758ede = logError(function() {
    var ret = new Error();
    return addHeapObject(ret);
});

const __wbg_stack_558ba5917b466edd = logError(function(arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
});

const __wbg_error_4bb6c2a97407129a = logError(function(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_free(arg0, arg1);
    }
});

const __wbg_deleteTexture_1affe310edd12b75 = logError(function(arg0, arg1) {
    getObject(arg0).deleteTexture(getObject(arg1));
});

const __wbg_deleteVertexArray_0a2982a2491f4fa9 = logError(function(arg0, arg1) {
    getObject(arg0).deleteVertexArray(getObject(arg1));
});

const __wbg_disableVertexAttribArray_f13a5786686fd68f = logError(function(arg0, arg1) {
    getObject(arg0).disableVertexAttribArray(arg1 >>> 0);
});

const __wbg_self_05c54dcacb623b9a = handleError(function() {
    var ret = self.self;
    return addHeapObject(ret);
});

const __wbg_window_9777ce446d12989f = handleError(function() {
    var ret = window.window;
    return addHeapObject(ret);
});

const __wbg_globalThis_f0ca0bbb0149cf3d = handleError(function() {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
});

const __wbg_global_c3c8325ae8c7f1a9 = handleError(function() {
    var ret = __webpack_require__.g.global;
    return addHeapObject(ret);
});

const __wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    _assertBoolean(ret);
    return ret;
};

const __wbg_newnoargs_3efc7bfa69a681f9 = logError(function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
});

const __wbg_call_cb478d88f3068c91 = handleError(function(arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
});

const __wbg_length_317f0dd77f7a6673 = logError(function(arg0) {
    var ret = getObject(arg0).length;
    _assertNum(ret);
    return ret;
});

const __wbg_set_4a5072a31008e0cb = logError(function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
});

const __wbg_newwithbyteoffsetandlength_9eb3327abeac2c52 = logError(function(arg0, arg1, arg2) {
    var ret = new Uint16Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
});

const __wbg_newwithbyteoffsetandlength_ab2b53c614369e0e = logError(function(arg0, arg1, arg2) {
    var ret = new Float32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
});

const __wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_malloc, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

const __wbg_blendFunc_d2d37c0919e2221c = logError(function(arg0, arg1, arg2) {
    getObject(arg0).blendFunc(arg1 >>> 0, arg2 >>> 0);
});

const __wbg_open_d71122b8786bb048 = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).open(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4), arg5 !== 0);
});

const __wbg_setonload_9871733840c353bb = logError(function(arg0, arg1) {
    getObject(arg0).onload = getObject(arg1);
});

const __wbg_setonerror_cb5c65763e1a60d2 = logError(function(arg0, arg1) {
    getObject(arg0).onerror = getObject(arg1);
});

const __wbg_send_03c8d891bc24da59 = handleError(function(arg0) {
    getObject(arg0).send();
});

const __wbg_texSubImage2D_ff84854054ae247f = handleError(function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
    getObject(arg0).texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, getObject(arg7));
});

const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

const __wbindgen_rethrow = function(arg0) {
    throw takeObject(arg0);
};

const __wbg_instanceof_Window_9c4fd26090e1d029 = logError(function(arg0) {
    var ret = getObject(arg0) instanceof Window;
    _assertBoolean(ret);
    return ret;
});

const __wbindgen_closure_wrapper359 = logError(function(arg0, arg1, arg2) {
    var ret = makeMutClosure(arg0, arg1, 18, __wbg_adapter_28);
    return addHeapObject(ret);
});

const __wbindgen_closure_wrapper412 = logError(function(arg0, arg1, arg2) {
    var ret = makeClosure(arg0, arg1, 18, __wbg_adapter_31);
    return addHeapObject(ret);
});



/***/ }),

/***/ "./src/core/pkg/index_bg.wasm":
/*!************************************!*\
  !*** ./src/core/pkg/index_bg.wasm ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.id];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name) exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./index_bg.js */ "./src/core/pkg/index_bg.js");


// exec wasm module
wasmExports[""]()

/***/ })

}]);
//# sourceMappingURL=src_core_pkg_index_js.aladin.js.map