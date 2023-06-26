import React, { useContext, useState, useEffect } from 'react';
import likebtnImg from './likebtn.png';
import commentImg from './comment.png';
import styled from 'styled-components';
import { UserContext } from './UserContext';

export default function PostsTest() {
  const { user } = useContext(UserContext);
  const [postsData, setPostsData] = useState([]);
  const [likeClicked, setLikeClicked] = useState(false);
  const [activePostFilter, setActivePostFilter] = useState(0);
  const [postType, setPostType] = useState('/post?limit=5&skip=0');
  const postFilterArr = ['전체', '이웃', '나'];
  ///post/feed/?limit=5&skip=10
  ///post?limit=5&skip=0
  const url = 'https://api.mandarin.weniv.co.kr';
  const postTypeHandler = (index) => {
    if (index === 0) {
      setPostType('/post?limit=5&skip=0');
    } else if (index === 1) {
      setPostType('/post/feed/');
    } else {
      setPostType(`/post/${user.accountname}/userpost`);
    }
  };
  const getPosts = async () => {
    console.log(user);
    try {
      const response = await fetch(url + postType, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.posts);
        setPostsData(data.posts);
        console.log('여기야!');
        // updateRefresh();
      } else {
        console.error('Error signing up:', response.status);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const postLike = async (postId) => {
    try {
      const response = await fetch(url + `/post/${postId}/heart`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log('좋아요!');

        setLikeClicked((prev) => !prev);
        // updateRefresh();
      } else {
        console.error('Error signing up:', response.status);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  const unlike = async (postId) => {
    try {
      const response = await fetch(url + `/post/${postId}/unheart`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log('좋아요!');

        setLikeClicked((prev) => !prev);
        // updateRefresh();
      } else {
        console.error('Error signing up:', response.status);
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  useEffect(() => {
    if (user) {
      getPosts();
    }
  }, [user, likeClicked, activePostFilter]);

  return (
    <section className='container'>
      <div className='wrapper'>
        <PostPageHeader>
          <h2>
            오늘은 {user?.username}님께 <br /> 어떤 일이 있었나요?
          </h2>
          <div>
            <img src={user?.image} alt='유저프로필이미지' />
          </div>
        </PostPageHeader>
        <PostNav>
          <ul>
            {postFilterArr.map((el, index) => {
              return (
                <li
                  key={index}
                  className={activePostFilter === index ? 'active' : ''}
                  onClick={() => {
                    setActivePostFilter(index);
                    postTypeHandler(index);
                  }}
                >
                  {el}
                </li>
              );
            })}
          </ul>
        </PostNav>
        <ul>
          {postsData?.map((el, index) => {
            const date = new Date(el.createdAt);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const created = `${year}.${month}.${day}.`;
            return (
              <li key={index}>
                <PostContainer>
                  <PostFirstRow>
                    <span>{el.author.username}</span>
                    <p>{el.content}</p>
                    {el.image && (
                      <FeedImage>
                        <img src={el.image} alt='게시글 이미지' />
                      </FeedImage>
                    )}
                    <div>
                      <span>지역</span>
                      <span>{created}</span>
                    </div>
                  </PostFirstRow>
                  <PostSecondRow>
                    <div
                      onClick={() => {
                        if (el.hearted) {
                          unlike(activePostFilter === 0 ? el._id : el.id);
                        } else {
                          postLike(activePostFilter === 0 ? el._id : el.id);
                        }
                      }}
                    >
                      <PostsSocialBtn>
                        <img src={likebtnImg} alt='좋아요버튼' />
                      </PostsSocialBtn>
                      <span>정확해요</span>
                      <span>{el.heartCount}</span>
                    </div>
                    <div>
                      <PostsSocialBtn>
                        <img src={commentImg} alt='댓글버튼' />
                      </PostsSocialBtn>
                      <span>댓글</span>
                      <span>{el.commentCount ? el.commentCount : 0}</span>
                    </div>
                  </PostSecondRow>
                </PostContainer>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

const PostNav = styled.nav`
  width: 100%;
  margin: 20px 0 10px 0;
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 15px;
      cursor: pointer;
      &.active {
        color: white;
        background-color: black;
        border-radius: 10px;
      }
    }
  }
`;

const FeedImage = styled.div`
  width: 200px;
  overflow: hidden;
  align-self: center;

  img {
    display: block;
    width: 100%;

    aspect-ratio: 60/60;
    object-fit: cover;
  }
`;

const PostFirstRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  div {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 12px;
      color: #aaa;
    }
  }
  & > span {
    font-size: 12px;
    color: #aaa;
  }
  p {
    display: block;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const PostSecondRow = styled.div`
  display: flex;
  gap: 20px;
  & > div {
    display: flex;
    font-size: 14px;
    gap: 5px;
    align-items: center;
    cursor: pointer;
  }
`;

const PostContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const PostPageHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 50px;
  align-items: center;

  img {
    border-radius: 100%;
  }
`;

const PostsSocialBtn = styled.div`
  width: 15px;
  overflow: hidden;
  /* border-radius: 100px; */

  img {
    display: block;
    width: 100%;

    aspect-ratio: 60/60;
    object-fit: cover;
  }
`;
