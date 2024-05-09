import * as AWS from "@aws-sdk/client-s3";

export class AwsGetFile {
    public static async get(bucketName: any, s3: any, fileName?: string): Promise<any> {
        const params = {
            Bucket: bucketName,
            Key: fileName
        };

        return new Promise((resolve, reject) => {
            const getObjectCommand = new AWS.GetObjectCommand(params);
            s3.send(getObjectCommand)
                .then((data: any) => {
                    resolve(data.Body)
                })
                .catch((err: any) => {
                    reject(err)
                });
        });
    }

    public static async getAll(bucketName: any, s3: any): Promise<any> {
        const params = {
            Bucket: bucketName
        };

        return new Promise((resolve, reject) => {
            const listObjectCommand = new AWS.ListObjectsCommand(params);
            s3.send(listObjectCommand)
                .then((data: any) => {
                    resolve(data)
                })
                .catch((err: any) => {
                    reject(err)
                });
        });
    }
}
