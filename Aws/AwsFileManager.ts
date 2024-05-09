import * as AWS from "@aws-sdk/client-s3";
import { ICloudStorage } from "../ICloudStorage";
import { AwsFileUpload, AwsGetFile, AwsFileDelete } from "./index";

export class AwsFileManager implements ICloudStorage {
    private bucketName: any;
    private s3: any;

    constructor() {
        const accessKey = process.env.S3_ACCESS_KEY;
        const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
        this.bucketName = process.env.S3_BUCKET_NAME;

        if (accessKey && secretAccessKey) {
            this.s3 = new AWS.S3({
                credentials: {
                    accessKeyId: accessKey,
                    secretAccessKey: secretAccessKey
                },
                region: "us-east-1"
            });
        }
    }

    public async get(fileName?: any): Promise<any> {
        return fileName ? AwsGetFile.getAll(this.bucketName, this.s3) : AwsGetFile.get(this.bucketName, this.s3, fileName);
    }

    public upload(buffer: any, fileName: any, link: any): Promise<any> {
        return AwsFileUpload.upload(buffer, fileName, link, this.bucketName, this.s3);
    }

    public async delete(fileName: string): Promise<any> {
        return AwsFileDelete.delete(fileName, this.bucketName, this.s3);
    }
}
