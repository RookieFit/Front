import './myPage.css'
import { Link, useNavigate } from 'react-router-dom';






/*    mypage_edit 이동
<button   onClick={goToAbout}>프로필 편집 </button>     
  const navigate = useNavigate();
    const goToAbout = () => {
      navigate('/myPage_Edit');
     };
*/



export default function myPage() {

  const myPage_Edit = [
    {button: "프로필 편집", path: "/myPage_Edit"}
  ];

  const myinfo_edit = [
    {button2: "수정하기", path: "/myPage_Edit"}
  ];

  
  return (
    <body className='MyPage'>
      <div className='mypage_1'>
        <div className='profile'>
          <div className='profile_up_box'>
            <div className='profile_image'> <img src='./layout/asses/images/Person.png'></img> </div>  {/* 그림 크기 조절*/}
            <div className='profile_nickname'>닉네임자리</div>
            <div className='profile_message'><textarea disabled>"메시지를 입력하세요"</textarea></div>
            <div className='profile_edit'>
              <nav className='button'>
                {myPage_Edit.map((item, index) => (
                  <Link key={index} to={item.path} className='button'>
                    {item.button}
                  </Link>
                ))}
              </nav>
                  <Link to='/myPage_Edit' className='button' />
            </div>
          </div>
        </div>
        <div className='myinfo'>
          <div className='myinfo_up_box'>
            <span className='myinfo_click'>내 정보</span>
            <span className='myinfo_edit'>
            <nav className='button2'>
                {myinfo_edit.map((item, index) => (
                  <Link key={index} to={item.path} className='button2'>
                    {item.button2}
                  </Link>
                ))}
              </nav>
                  <Link to='/myPage_Edit' className='button2' />
            </span>
          </div>
          <div className='myinfo_box'>
            <div className='myinfo_box_info'>
              <span className= 'name_box'> 닉네임 상자</span>
              <span className= 'name_line'>닉네임 </span>
            </div>
            <div className='myinfo_box_info'>
              <span className= 'name_box'> 이름 상자</span>
              <span className= 'name_line'>이름</span>
            </div>
            <div className='myinfo_box_info'>
              <span className= 'name_box'> 나이 상자</span>
              <span className= 'name_line'>나이</span>
            </div>
            <div className='myinfo_box_info'>
              <span className= 'name_box'> 몸무게 상자</span>
              <span className= 'name_line'>몸무게</span>
            </div>
            <div className='myinfo_box_info'>
              <span className= 'name_box'>키 상자</span>
              <span className= 'name_line'>키</span>
            </div>
            <div className='myinfo_box_info'>
              <span className= 'name_box'> 근력량 상자</span>
              <span className= 'name_line'>근력량</span>
            </div>
            <div className='myinfo_box_info'>
              <span className= 'name_box'> 체지방 상자</span>
              <span className= 'name_line'>체지방</span>
            </div>
            <div className='myinfo_box_info'>
              <span className= 'name_box'> 주소 상자</span>
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
   </body>
    
  )
}