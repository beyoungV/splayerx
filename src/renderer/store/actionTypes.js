export const Video = {
  SRC_SET: 'SRC_SET',
  INITIALIZE: 'INITIALIZE',
  VOLUME_UPDATE: 'VOLUME_UPDATE',
  INCREASE_VOLUME: 'INCREASE_VOLUME',
  DECREASE_VOLUME: 'DECREASE_VOLUME',
  MUTED_UPDATE: 'MUTED_UPDATE',
  TOGGLE_MUTED: 'TOGGLE_MUTED',
  INCREASE_RATE: 'INCREASE_RATE',
  DECREASE_RATE: 'DECREASE_RATE',
  CHANGE_RATE: 'CHANGE_RATE',
  PLAY_VIDEO: 'PLAY_VIDEO',
  PAUSE_VIDEO: 'PAUSE_VIDEO',
  META_INFO: 'META_INFO',
  UPDATE_DELAY: 'UPDATE_DELAY',
  ADD_AUDIO_TRACK: 'ADD_AUDIO_TRACK',
  SWITCH_AUDIO_TRACK: 'SWITCH_AUDIO_TRACK',
  REMOVE_ALL_AUDIO_TRACK: 'REMOVE_ALL_AUDIO_TRACK',
  LOOP: 'LOOP',
  UPDATE_PLAYINGLIST_RATE: 'UPDATE_PLAYINGLIST_RATE',
  UPDATE_DEFAULT_DIR: 'UPDATE_DEFAULT_DIR',
  UPDATE_SNAPSHOT_SAVED_PATH: 'UPDATE_SNAPSHOT_SAVED_PATH',
};

export const Subtitle = {
  ADD_SUBTITLE_WHEN_LOADING: 'ADD_SUBTITLE_WHEN_LOADING',
  ADD_SUBTITLE_WHEN_READY: 'ADD_SUBTITLE_WHEN_READY',
  ADD_SUBTITLE_WHEN_FAILED: 'ADD_SUBTITLE_WHEN_FAILED',
  ADD_SUBTITLE_WHEN_LOADED: 'ADD_SUBTITLE_WHEN_LOADED',
  ADD_TO_VIDEO_SUBTITLE_MAP: 'ADD_TO_VIDEO_SUBTITLE_MAP',
  REMOVE_FROM_VIDEO_SUBTITLE_MAP: 'REMOVE_FROM_VIDEO_SUBTITLE_MAP',
  INITIALIZE_VIDEO_SUBTITLE_MAP: 'INITIALIZE_VIDEO_SUBTITLE_MAP',
  CHANGE_CURRENT_FIRST_SUBTITLE: 'CHANGE_FIRST_SUBTITLE',
  CHANGE_CURRENT_SECOND_SUBTITLE: 'CHANGE_SECOND_SUBTITLE',
  RESET_SUBTITLES: 'RESET_SUBTITLES',
  RESET_ONLINE_SUBTITLES: 'RESET_ONLINE_SUBTITLES',
  OFF_SUBTITLES: 'OFF_SUBTITLES',
  UPDATE_METAINFO: 'UPDATE_METAINFO',
  UPDATE_SUBTITLE_DELAY: 'UPDATE_SUBTITLE_DELAY',
  UPDATE_SUBTITLE_SCALE: 'UPDATE_SUBTITLE_SCALE',
  UPDATE_SUBTITLE_STYLE: 'UPDATE_SUBTITLE_STYLE',
  UPDATE_SUBTITLE_SIZE: 'UPDATE_SUBTITLE_SIZE',
  UPDATE_LAST_SUBTITLE_SIZE: 'UPDATE_LAST_SUBTITLE_SIZE',
  UPDATE_SUBTITLE_TOP: 'UPDATE_SUBTITLE_TOP',
  REMOVE_LOCAL_SUBTITLE: 'REMOVE_LOCAL_SUBTITLE',
  UPDATE_SUBTITLE_TYPE: 'UPDATE_SUBTITLE_TYPE',
  UPDATE_ENABLED_SECONDARY_SUBTITLE: 'UPDATE_ENABLED_SECONDARY_SUBTITLE',
  UPDATE_SUBTITLE_SETTINGS_TYPE: 'UPDATE_SUBTITLE_SETTINGS_TYPE',
};

export const newSubtitle = {
  initialize: 'INITIALIZE',
  add: 'ADD',
  getDialogues: 'GET_DIALOGUES_BY_TIME',
  store: 'STORE',
  cache: 'CACHE',
  pause: 'PAUSE',
  resume: 'RESUME',
  upload: 'UPLOAD',
  manualUpload: 'MANUAL_UPLOAD',
  updatePlayedTime: 'UPDATE_PLAYED_TIME',
  alterDelay: 'ALTER_DELAY',
  resetDelay: 'RESET_DELAY',
  destroy: 'DESTROY',
};
export const SubtitleManager = {
  initializeManager: 'INITIALIZE_MANAGER',
  resetManager: 'RESET_MANAGER',
  addSubtitle: 'ADD_SUBTITLE',
  removeSubtitle: 'REMOVE_SUBTITLE',
  refreshSubtitlesInitially: 'REFRESH_SUBTITLES_INITIALLY',
  refreshSubtitles: 'REFRESH_SUBTITLES',
  refreshOnlineSubtitles: 'REFRESH_ONLINE_SUBTITLES',
  fetchSubtitleWhenTrabslateSuccess: 'FETCH_SUBTITLE_WHEN_TRANSLATE_SUCCESS',
  addLocalSubtitles: 'ADD_LOCAL_SUBTITLES',
  addLocalSubtitlesWithSelect: 'ADD_LOCAL_SUBTITLES_WITH_SELECT',
  addEmbeddedSubtitles: 'ADD_EMBEDDED_SUBTITLES',
  addOnlineSubtitles: 'ADD_ONLINE_SUBTITLES',
  addDatabaseSubtitles: 'ADD_DATABASE_SUBTITLES',
  checkLocalSubtitles: 'CHECK_LOCAL_SUBTITLES',
  deleteSubtitlesByUuid: 'DELETE_SUBTITLES_BY_UUID',
  deleteSubtitlesByHash: 'DELETE_SUBTITLES_BY_HASH',
  autoChangePrimarySubtitle: 'AUTO_CHANGE_PRIMARY_SUBTITLE',
  manualChangePrimarySubtitle: 'MANUAL_CHANGE_PRIMARY_SUBTITLE',
  autoChangeSecondarySubtitle: 'AUTO_CHANGE_SECONDARY_SUBTITLE',
  manualChangeSecondarySubtitle: 'MANUAL_CHANGE_SECONDARY_SUBTITLE',
  storeSelectedSubtitles: 'STORE_SELECTED_SUBTITLES',
  chooseSelectedSubtitles: 'CHOOSE_SELECTED_SUBTITLES',
  startAISelection: 'START_AI_SELECTION',
  checkSubtitleList: 'CHECK_SUBTITLE_LIST',
  stopAISelection: 'STOP_AI_SELECTION',
  getCues: 'GET_CUES',
  updatePlayedTime: 'UPDATE_PLAYED_TIME',
  manualUploadAllSubtitles: 'MANUAL_UPLOAD_ALL_SUBTITLES',
  clearSubtitles: 'CLEAR_SUBTITLES',
  alterPrimaryDelay: 'ALTER_PRIMARY_DELAY',
  resetPrimaryDelay: 'RESET_PRIMARY_DELAY',
  alterSecondaryDelay: 'ALTER_SECONDARY_DELAY',
  resetSecondaryDelay: 'RESET_SECONDARY_DELAY',
  storeSubtitleDelays: 'STORE_SUBTITLE_DELAYS',
};

export const Input = {
  MOUSEMOVE_UPDATE: 'MOUSEMOVE_UPDATE',
  MOUSEDOWN_UPDATE: 'MOUSEDOWN_UPDATE',
  MOUSEUP_UPDATE: 'MOUSEUP_UPDATE',
  KEYDOWN_UPDATE: 'KEYDOWN_UPDATE',
  KEYUP_UPDATE: 'KEYUP_UPDATE',
  WHEEL_UPDATE: 'WHEEL_UPDATE',
};

export const AudioTranslate = {
  AUDIO_TRANSLATE_START: 'AUDIO_TRANSLATE_START',
  AUDIO_TRANSLATE_INIT: 'AUDIO_TRANSLATE_INIT',
  AUDIO_TRANSLATE_CONTINUE: 'AUDIO_TRANSLATE_CONTINUE',
  AUDIO_TRANSLATE_DISCARD: 'AUDIO_TRANSLATE_DISCARD',
  AUDIO_TRANSLATE_BACKSATGE: 'AUDIO_TRANSLATE_BACKSATGE',
  AUDIO_TRANSLATE_SHOW_MODAL: 'AUDIO_TRANSLATE_SHOW_MODAL',
  AUDIO_TRANSLATE_HIDE_MODAL: 'AUDIO_TRANSLATE_HIDE_MODAL',
  AUDIO_TRANSLATE_UPDATE_STATUS: 'AUDIO_TRANSLATE_UPDATE_STATUS',
  AUDIO_TRANSLATE_BUBBLE_CALLBACK: 'AUDIO_TRANSLATE_BUBBLE_CALLBACK',
  AUDIO_TRANSLATE_MODAL_HIDE_CALLBACK: 'AUDIO_TRANSLATE_MODAL_HIDE_CALLBACK',
  AUDIO_TRANSLATE_BUBBLE_CANCEL_CALLBACK: 'AUDIO_TRANSLATE_BUBBLE_CANCEL_CALLBACK',
  AUDIO_TRANSLATE_SHOW_BUBBLE: 'AUDIO_TRANSLATE_SHOW_BUBBLE',
  AUDIO_TRANSLATE_HIDE_BUBBLE: 'AUDIO_TRANSLATE_HIDE_BUBBLE',
};

export const Browsing = {
  UPDATE_INITIAL_URL: 'UPDATE_INITIAL_URL',
  UPDATE_RECORD_URL: 'UPDATE_RECORD_URL',
  UPDATE_BARRAGE_OPEN: 'UPDATE_BARRAGE_OPEN',
  UPDATE_IS_PIP: 'UPDATE_IS_PIP',
  UPDATE_PIP_MODE: 'UPDATE_PIP_MODE',
  UPDATE_IS_HISTORY: 'UPDATE_IS_HISTORY',
  UPDATE_IS_ERROR: 'UPDATE_IS_ERROR',
  UPDATE_CURRENT_CHANNEL: 'UPDATE_CURRENT_CHANNEL',
  UPDATE_PIP_CHANNEL: 'UPDATE_PIP_CHANNEL',
};

export const UserInfo = {
  UPDATE_USER_INFO: 'UPDATE_USER_INFO',
  UPDATE_SIGN_IN_CALLBACK: 'UPDATE_SIGN_IN_CALLBACK',
};

export const UIStates = {
  UPDATE_SHOW_SIDEBAR: 'UPDATE_SHOW_SIDEBAR',
  UPDATE_SHOW_ALLWIDGETS: 'UPDATE_SHOW_ALLWIDGETS',
  UPDATE_PLAYLIST: 'UPDATE_PLAYLIST',
};
