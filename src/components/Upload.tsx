import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import React, { useState } from 'react';
import { bannerAdd } from '@/api/cake'
import Cloud from 'leancloud-storage'

// 将图片文件转换为 base64 编码格式的文件Z
const getBase64 = (img: any, callback: any) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

// const beforeUpload = (file: any) => {
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

//   if (!isJpgOrPng) {
//     message.error('You can only upload JPG/PNG file!');
//   }

//   const isLt2M = file.size / 1024 / 1024 < 2;

//   if (!isLt2M) {
//     message.error('Image must smaller than 2MB!');
//   }

//   return isJpgOrPng && isLt2M;
// };

const MyUpload = (props: any) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  // 通过父级表单包裹给该组件传入的props里有value和onchange
  // value是给组件外的父组件的表单使用的
  // onchange是组件内部用于设置value的方法
  // console.log('props', props)

  // const handleChange = (info: any) => {
  //   if (info.file.status === 'uploading') {
  //     setLoading(true);
  //     return;
  //   }

  //   if (info.file.status === 'done') {
  //     // Get this url from response in real world.
  //     getBase64(info.file.originFileObj, (url: any) => {
  //       setLoading(false);
  //       setImageUrl(url);
  //     });
  //   }
  // };

  const customUpload = (info: any) => {
    // console.log('info', info)
    setLoading(true)
    getBase64(info.file, (base64: any) => {
      console.log(base64)
      // 将本地资源转化为一个可以向leancloud平台提交的资源
      // cakeing.png 是文件名
      // const file = new Cloud.File('cakeimg.png', { base64 })
      // // 上传图片资源*********************************************************
      // file.save()
      // .then(res => {
      //   console.log('aaa', res)
      //   // let { url } = res.attributes
      //   // onchange方法可以给该组件的value属性设置一个值
      //   // props.onChange(url)
      //   // setLoading(false)
      //   // setImageUrl(url)
      // })
      // .catch(err => console.log(err))
      setLoading(false)
      setImageUrl(base64)
    })
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      customRequest={customUpload}
    >
      {/* beforeUpload={beforeUpload} */}
      {/* onChange={handleChange} */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default MyUpload;