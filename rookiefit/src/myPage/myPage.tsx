import React from 'react'
import './myPage.css'



export default function myPage() {
  return (
    <section className="mypage">
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
          <div className='myinfo_box_nickname'>
            <span className= 'nickname_box'> 닉네임</span>
            <span className= 'nickname_line'>닉네임 </span>
          </div>
          <div className='myinfo_box_name'>
            이름 상자 이름</div>
          <div className='myinfo_box_age'>
            나이 상자 나이</div>
          <div className='myinfo_box_weight'>
            모무게 상자 몸무게</div>
          <div className='myinfo_box_hight'>
            키 상자 키</div>
          <div className='myinfo_box_muscle'>
            근육량 상자 근육량</div>
          <div className='myinfo_box_fat'>
            체지방량 상자 체지방량</div>
          <div className='myinfo_box_address'>
            주소 상자 주소</div>
          <div className='myinfo_box_gym_name'>
            헹스장명 사자 헬스장명</div>
        </div>
      </div>
     
    
    <div className="mypage">
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
