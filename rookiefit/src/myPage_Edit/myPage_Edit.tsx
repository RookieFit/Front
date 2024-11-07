import { Link } from 'react-router-dom';
import './myPage_Edit.css'
import { useState } from 'react';


export default function myPage_Edit() {

  const myinfo_edit = [
    {button2: "수정하기", path: "/myPage"}
  ];
  
  const [textValues, setTextValues] = useState({
    textarea1: "메시지를 입력하세요",
    textarea2: "메시지를 입력하세요",
    textarea3: "메시지를 입력하세요",
    textarea4: "메시지를 입력하세요",
    textarea5: "메시지를 입력하세요",
    textarea6: "메시지를 입력하세요",
    textarea7: "메시지를 입력하세요",
    textarea8: "메시지를 입력하세요",
  });

  const handleSetValue = (e, key) => {
    setTextValues((prevValues) => ({
      ...prevValues,
      [key]: e.target.value
    }));
  };

  const handleSetTab = (e, key) => {
    if (e.keyCode === 9) {  // Tab 키를 감지
      e.preventDefault();
      let val = e.target.value;
      let start = e.target.selectionStart;
      let end = e.target.selectionEnd;

      // 탭을 추가한 값을 업데이트
      const updatedValue = val.substring(0, start) + "\t" + val.substring(end);
      setTextValues((prevValues) => ({
        ...prevValues,
        [key]: updatedValue
      }));

      // 커서 위치를 탭 다음으로 이동
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 1;
      }, 0);
    }
  };
  
  
  return (
    <body className='myPage_Edit'>
      <div className='myPage_Edit_1'>
        <div className='profile2'>
          <div className='profile_up_box2'>
           <div className='profile_image2'> <img src='./layout/asses/images/Person.png'></img> </div>  {/* 그림 크기 조절*/}
            <div className='profile_nickname2'>닉네임자리</div>
            <div className='profile_message'>
            <textarea
              id='textarea1'
              data-id="textarea1"
              placeholder="메시지 입력지"
              value={textValues.textarea1}
              onChange={(e) => handleSetValue(e, 'textarea1')}
              onKeyDown={(e) => handleSetTab(e, 'textarea1')}
            />
            </div>
            <div className='profile_edit'> 프로필 편집</div>
         </div>
        </div>
        <div className='myinfo2'>
          <div className='myinfo_up_box2'>
            <span className='myinfo_click2'>내 정보</span>
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
          <div className='myinfo_box2'>
            <div className='myinfo_box_info2'>
              <span className= 'name_box2'> 닉네임</span>
              <span className= 'textarea2'>
                <textarea
                  id ='textarea2'
                  data-id="textarea2"
                  placeholder="닉네임 입력지"
                  onChange={(e) => handleSetValue(e, 'textarea2')}
                  onKeyDown={(e) => handleSetTab(e, 'textarea2')}
                />
              </span>
            </div>
            <div className='myinfo_box_info2'>
              <span className= 'name_box2'> 이름</span>
              <span className= 'name_line2'>이름</span>
            </div>
            <div className='myinfo_box_info2'>
              <span className= 'name_box2'> 나이</span>
              <span className= 'name_line2'>나이</span>
            </div>
            <div className='myinfo_box_info2'>
              <span className= 'name_box2'> 몸무게</span>
              <span className= 'textarea2'>
                <textarea
                  id ='textarea3'
                  data-id="textarea3"
                  placeholder="몸무게 입력지"
                  onChange={(e) => handleSetValue(e, 'textarea3')}
                  onKeyDown={(e) => handleSetTab(e, 'textarea3')}
                />
              </span>
            </div>
            <div className='myinfo_box_info2'>
              <span className= 'name_box'>키</span>
              <span className= 'textarea2'>
                <textarea
                 id ='textarea4'
                 data-id="textarea4"
                  placeholder="키 입력지"
                  onChange={(e) => handleSetValue(e, 'textarea4')}
                  onKeyDown={(e) => handleSetTab(e, 'textarea4')}
                />
              </span>
            </div>
            <div className='myinfo_box_info2'>
              <span className= 'name_box'> 근력량</span>
              <span className= 'textarea2'>
                <textarea
                  id ='textarea5'
                  data-id="textarea5"
                  placeholder="근력량 입력지"
                  onChange={(e) => handleSetValue(e, 'textarea5')}
                  onKeyDown={(e) => handleSetTab(e, 'textarea5')}
                />
              </span>
            </div>
            <div className='myinfo_box_info2'>
              <span className= 'name_box'> 체지방</span>
              <span className= 'textarea2'>
                <textarea
                  id ='textarea6'
                  data-id="textarea6"
                  placeholder="체지방 입력지"
                  onChange={(e) => handleSetValue(e, 'textarea6')}
                  onKeyDown={(e) => handleSetTab(e, 'textarea6')}
                  />
              </span>
            </div>
            <div className='myinfo_box_info2'>
              <span className= 'name_box'> 주소</span>
              <span className= 'textarea2'>
                <textarea
                  id ='textarea7'
                  data-id="textarea7"
                  placeholder="주소 입력지"
                  onChange={(e) => handleSetValue(e, 'textarea7')}
                  onKeyDown={(e) => handleSetTab(e, 'textarea7')}
                />
              </span>
            </div>
            <div className='myinfo_box_info2'>
              <span className= 'name_box'> 체육관 이름</span>
              <span className= 'textarea2'>
                <textarea
                  id='textarea8'
                  data-id="textarea8"
                  placeholder="체육관 입력지"
                  onChange={(e) => handleSetValue(e, 'textarea8')}
                  onKeyDown={(e) => handleSetTab(e, 'textarea8')}
                />
              </span>
            </div>   
          </div>
        </div>
     </div>
     <div className="mypage_2">
        <div className='graph_box2'>
          체중 변화 그래프 
        </div>
        <div className='graph_box2'>
          근육량 변화 그래프
        </div>
        <div className='graph_box2'>
          체지방 변화 그래프
        </div>
      </div>
   </body>
    
  )
}
