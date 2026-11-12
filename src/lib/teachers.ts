export const teachers = [
  {id:'nguyen-thi-dien',name:'Cô Nguyễn Thị Diện',role:'Chuyên gia · Chủ trung tâm',unit:'Trung tâm Bồi dưỡng học sinh giỏi Vĩnh Xuân',expert:true,sample:false},
  ...Array.from({length:5},(_,i)=>({id:`minh-hoa-${String(i+1).padStart(2,'0')}`,name:`Giáo viên minh họa ${String(i+1).padStart(2,'0')}`,role:'Giáo viên Toán · Hồ sơ mẫu',unit:'Đơn vị quản lý mẫu',expert:false,sample:true})),
];
