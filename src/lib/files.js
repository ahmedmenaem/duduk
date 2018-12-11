import fs from 'fs';
import path from 'fs';

export default {
    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd);
    },

    directoryExists: (filePath) => {
        try {
            return fs.statSync(filePath).isDirectory();
        } catch (ex) {
            return false;
        }
    }
};
