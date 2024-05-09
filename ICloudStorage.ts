export interface ICloudStorage  {
    get(fileName?: any): Promise<any>;
    upload(buffer: any, fileName: any, link: any): Promise<any>;
    delete(fileName: string): Promise<any>;
}
