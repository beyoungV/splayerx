import { IPlayInfoStorable } from "@/interfaces/IPlayInfoStorable";
import { info, data } from "@/libs/DataBase";
import { MediaItem, PlaylistItem } from "@/interfaces/IDB";
import { VIDEO_OBJECT_STORE_NAME, RECENT_OBJECT_STORE_NAME } from "@/constants";

export default class PlayInfoStorageService implements IPlayInfoStorable {
  /**
   * @description 更新video播放的信息
   * @author tanghaixiang@xindong.com
   * @date 2019-06-11
   * @param {number} videoID
   * @param {MediaItem} data
   * @returns {Promise<boolean>} 返回布尔值, 是否成功更新
   * @memberof PlayInfoStorageService
   */
  async updateMediaItemBy(videoID: number, data: MediaItem): Promise<boolean> {
    let value = null;
    try {
      value = await info.getValueByKey(VIDEO_OBJECT_STORE_NAME, videoID)
    } catch (error) {
      return false;
    }
    if (value) {
      try {
        await info.update(VIDEO_OBJECT_STORE_NAME, videoID, { ...value, ...data } as MediaItem);
        return true;
      } catch (error) {
        return false;
      }
    }
    return false;
  }
  /**
   * @description 更新最近播放列表
   * @author tanghaixiang@xindong.com
   * @date 2019-06-11
   * @param {number} playListID
   * @param {PlaylistItem} data
   * @returns {Promise<boolean>} 返回布尔值, 是否成功更新
   * @memberof PlayInfoStorageService
   */
  async updateRecentPlayedBy(playListID: number, data: PlaylistItem): Promise<boolean> {
    try {
      let playList = await info.getValueByKey(RECENT_OBJECT_STORE_NAME, playListID)
      await info.update(RECENT_OBJECT_STORE_NAME, playList.id, { ...playList, ...data } as PlaylistItem);
      return true;
    } catch (error) {
      return false;
    }

  }

  /**
   * @description 删除播放列表
   * @author tanghaixiang@xindong.com
   * @date 2019-06-11
   * @param {number} playListID
   * @returns {Promise<boolean>} 返回布尔值, 是否成功更新
   * @memberof PlayInfoStorageService
   */
  async deleteRecentPlayedBy(playListID: number): Promise<boolean> {
    try {
      await info.delete(RECENT_OBJECT_STORE_NAME, playListID);
      return true;
    } catch (error) {
      return false;
    }
  }
  async getAllRecentPlayed(): Promise<PlaylistItem[]> {
    const results = await info.getAll('recent-played');
    return results.sort((a: PlaylistItem, b: PlaylistItem) => b.lastOpened - a.lastOpened);
  }
}


export const playInfoStorageService = new PlayInfoStorageService()