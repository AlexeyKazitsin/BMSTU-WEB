import {accessToken, version, friendsToken} from "./consts.js";

class Urls {
    constructor() {
        this.url = 'https://api.vk.com/method'
        this.commonInfo = `access_token=${accessToken}&v=${version}`
        this.commonFriendInfo = `access_token=${friendsToken}&v=${version}`
    }

    getUserInfo(userId) {
        return `${this.url}/users.get?user_ids=${userId}&fields=photo_400_orig&${this.commonInfo}`
    }

    getGroupMembers(groupId) {
        return `${this.url}/groups.getMembers?group_id=${groupId}&fields=photo_400_orig&${this.commonInfo}`
    }

    getFriends(userId){
        return `${this.url}/friends.get?user_id=${userId}&fields=photo_200_orig&${this.commonFriendInfo}`
    }
}

export const urls = new Urls()