module.exports = {
    getPermissions: (path, method) => {
        let pattern = /(\/api\/v[6|7]\/)?((\w+\/?|\d+\/?)+)/;
        if (!pattern.test(path)) throw new Error("Invalid path given.");
        let uri = path.match(pattern)[2];
        let arguments = uri.split('/');
        console.log(uri, arguments);
        if (method == "PUT") {
            if (arguments.length == 2 && arguments[0] == 'channels') return ['MANAGE_CHANNELS'];            
            if (arguments.length == 7 && arguments[0] == 'channels' && arguments[2] == 'messages' && arguments[4] == 'reactions' && arguments[6] == '@me') return ['READ_MESSAGE_HISTORY', 'ADD_REACTIONS'];
            if (arguments.length == 4 && arguments[0] == 'channels' && arguments[2] == 'permissions') return ['MANAGE_ROLES'];
            if (arguments.length == 4 && arguments[0] == 'channels' && arguments[2] == 'pins') return ['MANAGE_MESSAGES'];
            if (arguments.length == 4 && arguments[0] == 'channels' && arguments[2] == 'recipients') return [];
            if (arguments.length == 4 && arguments[0] == 'guilds' && arguments[2] == 'members') return ['CREATE_INSTANT_INVITE'];
            if (arguments.length == 6 && arguments[0] == 'guilds' && arguments[2] == 'members' && arguments[4] == 'roles') return ['MANAGE_ROLES'];
            if (arguments.length == 4 && arguments[0] == 'guilds' && arguments[2] == 'bans') return ['BAN_MEMBERS'];
        } else if (method == "POST") {
            if (arguments.length == 3 && arguments[0] == 'channels' && arguments[2] == 'messages') return ['SEND_MESSAGES', '?SEND_TTS_MESSAGE'];
            if (arguments.length == 4 && arguments[0] == 'channels' && arguments[2] == 'messages' && arguments[3] == 'bulk-delete') return ['MANAGE_MESSAGES'];
            if (arguments.length == 3 && arguments[0] == 'channels' && arguments[2] == 'invites') return ['CREATE_INSTANT_INVITE'];
            if (arguments.length == 3 && arguments[0] == 'channels' && arguments[2] == 'typing') return [];
            if (arguments.length == 3 && arguments[0] == 'guilds' && arguments[2] == 'emojis') return ['MANAGE_EMOJIS'];
            if (arguments.length == 1 && arguments[0] == 'guilds') return [];
            if (arguments.length == 3 && arguments[0] == 'guilds' && arguments[2] == 'channels') return ['MANAGE_CHANNELS'];
            if (arguments.length == 3 && arguments[0] == 'guilds' && arguments[2] == 'roles') return ['MANAGE_ROLES'];
            if (arguments.length == 2 && arguments[0] == 'guilds' && arguments[2] == 'prune') return ['KICK_MEMBERS'];
            if (arguments.length == 3 && arguments[0] == 'guilds' && arguments[2] == 'integrations') return ['MANAGE_GUILD'];
            if (arguments.length == 5 && arguments[0] == 'guilds' && arguments[2] == 'integrations' && arguments[4] == 'sync') return ['MANAGE_GUILD'];
            if (arguments.length == 3 && arguments[0] == 'users' && arguments[1] == '@me' && arguments[2] == 'channels') return [];
            if (arguments.length == 3 && arguments[0] == 'channels' && arguments[2] == 'webhooks') return ['MANAGE_WEBHOOKS'];
            if (arguments.length == 3 && arguments[0] == 'webhooks') return [];
            if (arguments.length == 4 && arguments[0] == 'webhooks' && arguments[3] == 'slack') return [];
            if (arguments.length == 4 && arguments[0] == 'webhooks' && arguments[3] == 'github') return [];
        } else if (method == "PATCH") {
            if (arguments.length == 2 && arguments[0] == 'channels') return ['MANAGE_CHANNELS'];
            if (arguments.length == 4 && arguments[0] == 'channels' && arguments[2] == 'messages') return [];
            if (arguments.length == 4 && arguments[0] == 'guilds' && arguments[2] == 'emojis') return ['MANAGE_EMOJIS'];
            if (arguments.length == 2 && arguments[0] == 'guilds') return ['MANAGE_GUILD'];
            if (arguments.length == 3 && arguments[0] == 'guilds' && arguments[2] == 'channels') return ['MANAGE_CHANNELS'];
            if (arguments.length == 4 && arguments[0] == 'guilds' && arguments[2] == 'members') return ['?MANAGE_NICKNAMES', '?MANAGE_ROLES', '?MUTE_MEMBERS', '?DEAFEN_MEMBERS', '?MOVE_MEMBERS'];
            if (arguments.length == 5 && arguments[0] == 'guilds' && arguments[2] == 'members' && arguments[3] == '@me' && arguments[4] == 'nick') return ['CHANGE_NICKNAME'];
            if (arguments.length == 3 && arguments[0] == 'guilds' && arguments[2] == 'roles') return ['MANAGE_ROLES'];
            if (arguments.length == 4 && arguments[0] == 'guilds' && arguments[2] == 'roles') return ['MANAGE_ROLES'];
            if (arguments.length == 4 && arguments[0] == 'guilds' && arguments[2] == 'integrations') return ['MANAGE_GUILD'];
            if (arguments.length == 3 && arguments[0] == 'guilds' && arguments[2] == 'embed') return ['MANAGE_GUILD'];
            if (arguments.length == 2 && arguments[0] == 'users' && arguments[1] == '@me') return [];
            if (arguments.length == 2 && arguments[0] == 'webhooks') return ['MANAGE_WEBHOOKS'];
            if (arguments.length == 3 && arguments[0] == 'webhooks') return ['MANAGE_WEBHOOKS'];
        } else if (method == "DELETE") {
            if (arguments.length == 2 && arguments[0] == 'channels') return ['MANAGE_CHANNELS'];
            if (arguments.length == 7 && arguments[0] == 'channels' && arguments[2] == 'messages' && arguments[4] == 'reactions' && arguments[6] == '@me') return [];
            if (arguments.length == 7 && arguments[0] == 'channels' && arguments[2] == 'messages' && arguments[4] == 'reactions' && arguments[6] != '@me') return ['MANAGE_MESSAGES'];
            if (arguments.length == 5 && arguments[0] == 'channels' && arguments[2] == 'messages' && arguments[4] == 'reactions') return ['MANAGE_MESSAGES'];
            if (arguments.length == 4 && arguments[0] == 'channels' && arguments[2] == 'messages') return ['MANAGE_MESSAGES'];
            if (arguments.length == 4 && arguments[0] == 'channels' && arguments[2] == 'permissions') return ['MANAGE_ROLES'];
            if (arguments.length == 4 && arguments[0] == 'channels' && arguments[2] == 'pins') return ['MANAGE_MESSAGES'];
            if (arguments.length == 4 && arguments[0] == 'channels' && arguments[2] == 'recipients') return [];
            if (arguments.length == 4 && arguments[0] == 'guilds' && arguments[2] == 'emojis') return ['MANAGE_EMOJIS'];
            if (arguments.length == 2 && arguments[0] == 'guilds') return [];
            if (arguments.length == 6 && arguments[0] == 'guilds' && arguments[2] == 'members' && arguments[4] == 'roles') return ['MANAGE_ROLES'];
            if (arguments.length == 4 && arguments[0] == 'guilds' && arguments[2] == 'members') return ['KICK_MEMBERS'];
            if (arguments.length == 4 && arguments[0] == 'guilds' && arguments[2] == 'bans') return ['BAN_MEMBERS'];
            if (arguments.length == 4 && arguments[0] == 'guilds' && arguments[2] == 'roles') return ['MANAGE_ROLES'];
            if (arguments.length == 4 && arguments[0] == 'guilds' && arguments[2] == 'integrations') return ['MANAGE_GUILD'];
            if (arguments.length == 2 && arguments[0] == 'invites') return ['MANAGE_CHANNELS'];
            if (arguments.length == 4 && arguments[0] == 'users' && arguments[1] == '@me' && arguments[2] == 'guilds') return [];
            if (arguments.length == 2 && arguments[0] == 'webhooks') return [];
            if (arguments.length == 3 && arguments[0] == 'webhooks') return [];
        } else if (method == "GET") {
            if (arguments.length == 3 && arguments[0] == 'guilds' && arguments[2] == 'audit-logs') return ['VIEW_AUDIT_LOG'];
            if (arguments.length == 3 && arguments[0] == 'channels' && arguments[2] == 'messages') return ['VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'];
            if (arguments.length == 4 && arguments[0] == 'channels' && arguments[2] == 'messages') return ['READ_MESSAGE_HISTORY'];
            if (arguments.length == 3 && arguments[0] == 'channels' && arguments[2] == 'invites') return ['MANAGE_CHANNELS'];
            if (arguments.length == 3 && arguments[0] == 'guilds' && arguments[2] == 'bans') return ['BAN_MEMBERS'];
            if (arguments.length == 4 && arguments[0] == 'guilds' && arguments[2] == 'bans') return ['BAN_MEMBERS'];
            if (arguments.length == 3 && arguments[0] == 'guilds' && arguments[2] == 'prune') return ['KICK_MEMBERS'];
            if (arguments.length == 3 && arguments[0] == 'guilds' && arguments[2] == 'invites') return ['MANAGE_GUILD'];
            if (arguments.length == 3 && arguments[0] == 'guilds' && arguments[2] == 'integrations') return ['MANAGE_GUILD'];
            if (arguments.length == 3 && arguments[0] == 'guilds' && arguments[2] == 'embed') return ['MANAGE_GUILD']
            if (arguments.length == 3 && arguments[0] == 'guilds' && arguments[2] == 'vanity-url') return ['MANAGE_GUILD'];
            if (arguments.length == 3 && arguments[0] == 'channels' && arguments[2] == 'webhooks') return ['MANAGE_WEBHOOKS'];
            if (arguments.length == 3 && arguments[0] == 'guilds' && arguments[2] == 'webhooks') return ['MANAGE_WEBHOOKS'];
        }

        return [];
    }
}