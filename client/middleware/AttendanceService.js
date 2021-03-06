import axios from "axios";

const url = 'http://192.168.1.140:5000/api/attendance';

class AttendanceService{
    //Get all Attendance Records
    static getAttendance(){
        return new Promise(async (resolve,reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    
                )
            }catch(err){
                reject(err);
            }
        })
    }

    //Get Attendance Record by ID
    static getAttendanceByID(id){
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

    //Get Attendance Record by Date
    static getAttendanceByDate(date){
        return new Promise(async (resolve,reject) => {
            try{
                const res = await axios.get(url+'/date/'+date);
                const data = res.data;
                resolve(
                    
                )
            }catch(err){
                reject(err);
            }
        })
    }

    //Get Attendance Record between Dates
    static getAttendanceBetweenDate(datefrom,dateto,courseCode,scannerID){
        return new Promise(async (resolve,reject) => {
            try{
                let currentUrl = url+'/2date/'+datefrom+'/'+dateto+'/'+courseCode+'/'+scannerID;
                const res = await axios.get(currentUrl);
                const data = res.data;
                console.log(data);
                resolve(
                    data
                );
            }catch(err){
                reject(err);
            }
        })
    } 

    //Get Attendance Record between Dates
    static getAttendanceBetweenDateID(datefrom,dateto,studentID,scannerID){
        return new Promise(async (resolve,reject) => {
            try{
                let currentUrl = url+'/2dateID/'+datefrom+'/'+dateto+'/'+studentID+'/'+scannerID;
                const res = await axios.get(currentUrl);
                const data = res.data;
                console.log(data);
                resolve(
                    data
                );
            }catch(err){
                reject(err);
            }
        })
    }   
}

export default AttendanceService;