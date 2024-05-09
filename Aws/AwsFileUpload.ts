import * as AWS from "@aws-sdk/client-s3";

export class AwsFileUpload {
    public static async upload(buffer: any, fileName: any, link: any, buckeName: any, s3: any): Promise<any> {

        const params = {
            Bucket: buckeName,
            Key: fileName,
            Body: buffer
        };

        return new Promise((resolve, reject) => {
            const putObjectCommand = new AWS.PutObjectCommand(params);
            s3.send(putObjectCommand)
                .then((data: any) => {
                    return resolve(link);
                })
                .catch((err: any) => {
                    reject(err);
                })
        });
    }
}
