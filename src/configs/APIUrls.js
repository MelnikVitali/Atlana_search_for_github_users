import { gitHubConfigs } from './gitHubConfigs';

export const APIUrls = {
    baseURL: `https://api.github.com/`,
    searchUsers: `https://api.github.com/search/users?q=`,
    searchUser: `https://api.github.com/users/`,
    gitHubQuerySettingsUsers: `client_id=${gitHubConfigs.githubClientId}&client_secret=${gitHubConfigs.githubClientSecret}&per_page=30`,
    gitHubQuerySettingsRepos: `/repos?type=all&sort=updated&$client_id=${gitHubConfigs.githubClientId}&client_secret=${gitHubConfigs.githubClientSecret}`
};

