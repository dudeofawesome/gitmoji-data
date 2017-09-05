# Gitmoji data

All thanks goes to https://github.com/carloscuesta/gitmoji.
This repository is just here to have an easy way for other
packages to depend on the gitmoji data without having to
request it. But can depend on it in the package.json file


## Usage
```javascript
const gitmojiData = require('gitmoji-data/data/gitmojis.json');
const GITMOJI_DATA_URL = 'https://raw.githubusercontent.com/gyran/gitmoji-data/master/data/gitmojis.json';

const getGitmojiList = () => {
  return axios.get(GITMOJI_DATA_URL)
    .then((res) => {
      if (res && res.data && res.data.gitmojis) {
        return res.data.gitmojis;
      }

      throw new Error('Could not find gitmojis at url');
    })
    .catch(() => {
      return gitmojiData.gitmojis;
    });
};
```
