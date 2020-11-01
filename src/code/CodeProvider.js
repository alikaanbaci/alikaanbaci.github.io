import dfs from './dfs.code';

export default class CodeProvider {
    
    getCodeString(codeFileName) {
        switch (codeFileName){
            case "dfs":
                return dfs;
            default:
                return null;
        }
    }
}