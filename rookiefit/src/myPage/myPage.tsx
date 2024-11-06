import React from 'react'
import './myPage.css'



export default function myPage() {
  return (
    <section className="mypage">
      <div className='mypage_1'>
        <div className='profile_up_box'>
          <div className='profile'>
           <div className='profile_image'> <img src=""></img> </div>  {/* 그림 크기 조절*/}
            <div className='profile_nickname'>닉네임자리</div>
           <div className='profile_message'><textarea>"메시지를 입력하세요"</textarea></div>
           <div className='profile_edit'> 프로필 편집</div>
         </div>
        </div>
        <div className='myinfo'>
          <div className='myinfo_up_box'>
            <span className='myinfo_click'>내 정보</span>
            <span className='myinfo_edit'> 수정하기</span>
          </div>
          <div className='myinfo_box'>
            <div className='myinfo_box_info'>
              <span className= 'name_box'> 닉네임</span>
              <span className= 'name_line'>닉네임 </span>
            </div>
            <div className='myinfo_box_info'>
              <span className= 'name_box'> 이름</span>
              <span className= 'name_line'>이름</span>
            </div>
            <div className='myinfo_box_info'>
              <span className= 'name_box'> 나이</span>
              <span className= 'name_line'>나이</span>
            </div>
            <div className='myinfo_box_info'>
              <span className= 'name_box'> 몸무게</span>
              <span className= 'name_line'>몸무게</span>
            </div>
            <div className='myinfo_box_info'>
              <span className= 'name_box'>키</span>
              <span className= 'name_line'>키</span>
            </div>
            <div className='myinfo_box_info'>
              <span className= 'name_box'> 근력량</span>
              <span className= 'name_line'>근력량</span>
            </div>
            <div className='myinfo_box_info'>
              <span className= 'name_box'> 체지방</span>
              <span className= 'name_line'>나체지방</span>
            </div>
            <div className='myinfo_box_info'>
              <span className= 'name_box'> 주소</span>
              <span className= 'name_line'>주소</span>
            </div>
            <div className='myinfo_box_info'>
              <span className= 'name_box'> 체육관 이름</span>
              <span className= 'name_line'>체육관 이름</span>
            </div>   
          </div>
        </div>
     </div>
     <div className="mypage_2">
        <div className='graph_box'>
          체중 변화 그래프
        </div>
        <div className='graph_box'>
          근육량 변화 그래프
        </div>
        <div className='graph_box'>
          체지방 변화 그래프
        </div>
      </div>
   </section>
    
  )
}

