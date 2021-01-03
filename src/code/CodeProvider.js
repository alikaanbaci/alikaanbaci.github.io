import dfs from './dfs.code';
import composite from './composite.code';

export default class CodeProvider {
    
    getCodeString(codeFileName) {
        switch (codeFileName){
            case "dfs":
                return dfs;
			case "composite":
                return composite;
            default:
                return null;
        }
    }
}