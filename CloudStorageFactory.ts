import { CloudStorage } from "./index";
import { AwsFileManager } from "./Aws/index";

export class CloudStorageFactory {
    public static getCloudStorage(type: string) {
        switch (type) {
            case CloudStorage.AWS:
                return new AwsFileManager();
            default:
                return null;
        }
    }
}
