    import axios from "axios";

const url = 'http://localhost:5000/api/scanner';

class ScannerService{
    //Get all Scanner Records
    static getScanners(){
        return new Promise(async (resolve,reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data
                )
            }catch(err){
                reject(err);
            }
        })
    }

    //Get Scanner Record by ID
    static getScannerByID(id){
        return new Promise(async (resolve,reject) => {
            try{
                const res = await axios.get(url+'/id/'+id);
                const data = res.data;
                resolve(
                    
                )
            }catch(err){
                reject(err);
            }
        })
    }


    //Add course to scanner
    static addCourse(id,course,day,startHour,startMinute,endHour,endMinute){
        return new Promise(async (resolve,reject) => {
            try{
                const res = await axios.post(url,{
                    "scannerID":id,
                    "startHour":startHour,
                    "startMinute":startMinute,
                    "endHour":endHour,
                    "endMinute":endMinute,
                    "day":day,
                    "courseCode":course

                });
                const data = res.data;
                resolve(
                    data
                )
            }catch(err){
                reject(err);
            }
        })
    }

    //Add course to scanner
    static deleteCourse(id,course,day,startHour,startMinute,endHour,endMinute){
        return new Promise(async (resolve,reject) => {
            try{
                const res = await axios.delete(url,{data:{
                        "scannerID":id,
                        "startHour":startHour,
                        "startMinute":startMinute,
                        "endHour":endHour,
                        "endMinute":endMinute,
                        "day":day,
                        "courseCode":course
                    }
                });
                const data = res.data;
                resolve(
                    data
                )
            }catch(err){
                reject(err);
            }
        })
    }
}

export default ScannerService;