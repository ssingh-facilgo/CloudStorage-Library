import * as AWS from "@aws-sdk/client-s3";

export class AwsFileDelete {
    public static async delete(fileName: string, buckeName: any, s3: any): Promise<any> {
        const params = {
            Bucket: buckeName,
            Key: fileName
        };

        return new Promise((resolve, reject) => {
            const deleteObjectCommand = new AWS.DeleteObjectCommand(params);
            s3.send(deleteObjectCommand)
                .then(() => {
                    resolve(true);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }
}
