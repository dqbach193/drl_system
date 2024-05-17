import{PieChart, Pie, Cell, Tooltip, ResponsiveContainer} from 'recharts'

const Chart = (allDRL, {selectedSemester, selectedYear}) => {
    
    const semester = allDRL.selectedSemester;
    const year = allDRL.selectedYear
    const major = allDRL.selectedMajor
    const selectedDepartment = allDRL.selectedDepartment
    console.log(semester)
    console.log('Selected year: ' + year)
    console.log('Selected major: ' + major)
    console.log('Selected department: ' + selectedDepartment)
    const department ={
        1: ["12"],
        2: ['1', '8', '16', '14', '15'],
        3: ['2', '9', '17'],
        4: ['4', '6', '11'],
        5: ['3', '13'],
        6: ['7'],
        7: ['10'],
        8: ['5']
    }

    console.log('Available majors: ' + department[selectedDepartment])

    function getFirstTwoDigits(number) {
        const numStr = number.toString(); // Convert the number to a string
        return numStr.substring(0, 2); // Get the first two characters
    }
    function getThirdAndFourthDigits(number) {
        const numStr = number.toString(); // Convert the number to a string
        return numStr.substring(2, 4); // Get the third and fourth characters
    }

    let filteredDRL = Object.values(allDRL).filter(drl => drl.semester === semester);
    if(year!=='')
    {
        if(year!== undefined){
            // if(year == 1){
            //     filteredDRL = Object.values(allDRL).filter(drl => drl.semester === semester && (drl.userClass == 1 || drl.userClass == 2));
            // }
            // if(year == 2){
            //     filteredDRL = Object.values(allDRL).filter(drl => drl.semester === semester && (drl.userClass == 3 || drl.userClass == 4));
            // }
            filteredDRL = Object.values(allDRL).filter(drl => drl.semester === semester && (getFirstTwoDigits(drl.userClass) == year));
        }
    }
    
    if(major!=='' && selectedDepartment ===''){
        if(major!==undefined && year!== undefined){
            filteredDRL = Object.values(allDRL).filter(drl => drl.semester === semester && (getFirstTwoDigits(drl.userClass) == year) && (getThirdAndFourthDigits(drl.userClass) == major));
        }
    }

    if(selectedDepartment!==''){
        if(selectedDepartment!== undefined && year!== undefined){
            const theDepartment = department[selectedDepartment];
            filteredDRL = Object.values(allDRL).filter(drl => drl.semester === semester && (getFirstTwoDigits(drl.userClass) == year) && (theDepartment.includes(getThirdAndFourthDigits(drl.userClass))))
        }
    }
    console.log(filteredDRL)
    let diemKha = 0;
    let diemGioi = 0;
    let diemKem = 0;
    let diemXuatSac = 0;
    let diemTrungBinh = 0;
    let counter = 0;
    filteredDRL.forEach(drl =>{
        if(drl.drl<=59){
            diemKem++;
        }
        if(drl.drl >= 60 && drl.drl < 70){
            diemTrungBinh++;
        }
        if(drl.drl >= 70 && drl.drl < 80){
            diemKha++;
        }
        if(drl.drl >= 80 && drl.drl <90){
            diemGioi++;
        }
        if(drl.drl >= 90){
            diemXuatSac++;
        }
        counter++
    })

    const data = [
        { name: 'Điểm kém', value: diemKem },
        { name: 'Điểm trung bình', value: diemTrungBinh },
        { name: 'Điểm khá', value: diemKha },
        { name: 'Điểm giỏi', value: diemGioi },
        { name: 'Điểm xuất sắc', value: diemXuatSac },
      ];
      
      const COLORS = ['#fe1500', '#FFBB28', '#00C49F',  '#FF8042', '#0ceefa'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return percent * 100 === 0 ? null : (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
              {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
      };
    return ( 
    <div className="chart">
        <h2>Thống kê điểm</h2>
        <div className=''></div> Tổng sinh viên : {counter}  <br />
        <div className='diemKem'></div> Số điểm kém : {diemKem}  <br />
        <div className='diemTB'></div> Số điểm trung bình : {diemTrungBinh} <br />
        <div className='diemKha'></div> Số điểm khá : {diemKha} <br />
        <div className='diemGioi'></div> Số điểm giỏi : {diemGioi} <br />
        <div className='diemXS'></div> Số điểm xuất sắc : {diemXuatSac}
        
        <ResponsiveContainer width={500} height={500}>
        <PieChart width="100%" height="100%">
        <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
        >
            {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            
        </Pie>
        <Tooltip />
        </PieChart>
        </ResponsiveContainer>
    </div>
     );
}
 
export default Chart;