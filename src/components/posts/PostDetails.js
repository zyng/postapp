import React from 'react';

const PostDetails = (props) => {

    const postId = props.match.params.id;
    console.log(props);

    return (
        <div className="post-summary">
            <div className="post">
                <div className="post__title">Post title {postId}</div>
                <div className="post__body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illum voluptas sint inventore. Magni cumque dignissimos possimus culpa. Quo officiis laborum veniam placeat alias earum consectetur corrupti explicabo consequuntur dolorem, nemo inventore facere tenetur pariatur nihil voluptas voluptatibus, culpa, magnam provident nam non! Libero distinctio sequi, doloribus soluta facilis magni laborum quam fuga blanditiis, delectus pariatur, ea culpa! Praesentium asperiores iste quas? Quis facilis earum odit, ipsum molestias atque nesciunt, fuga similique aspernatur quae, accusantium possimus quisquam iste commodi vitae. Delectus quaerat impedit, modi molestiae cumque amet ex praesentium veritatis dolorum eius dignissimos non? Doloremque reprehenderit inventore placeat dicta cupiditate?</div>
                <div className="post__date">3 December 2018</div>
            </div>
        </div>
    );
}

export default PostDetails;