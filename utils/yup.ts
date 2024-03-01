// import { object, string, number, date, InferType } from 'yup';
// import HttpError from './http-error';

// export default async function checkUserInput(data: any) {
//     let userSchema = object({
//         email: string().email().required(),
//         password: string().required()
//     });

//     const check = await userSchema.validate(data, { abortEarly: false });
//     console.log('check ============================== ',check);
    

//     if(!check){
//         throw new HttpError('輸入有錯誤請再做確認', '401')
//     }
// }