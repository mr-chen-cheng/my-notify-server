import axios from 'axios'

const BASE_URL = 'https://qyapi.weixin.qq.com'

export const postMsg: FnReqPostMsg = async (accessToken, config) => {
  console.log('touser----', config.touser)
  const response = await axios({
    url: `${BASE_URL}/cgi-bin/message/send?access_token=${accessToken}`,
    method: 'POST',
    data: {
      touser: '17631248292',
      ...config,
    },
  })
  return response.data
}
