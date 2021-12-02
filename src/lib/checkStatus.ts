export function checkStatus(
  status: number,
  msg: string,
): void {
  let errMessage = '';

  switch (status) {
    case 400:
      errMessage = `${msg}`;
      break;
    case 401:
      errMessage = msg || 'sys.api.errMsg401';
      break;
    case 403:
      errMessage = 'sys.api.errMsg403';
      break;
    // 404请求不存在
    case 404:
      errMessage = 'sys.api.errMsg404';
      break;
    case 405:
      errMessage = 'sys.api.errMsg405';
      break;
    case 408:
      errMessage = 'sys.api.errMsg408';
      break;
    case 500:
      errMessage = 'sys.api.errMsg500';
      break;
    case 501:
      errMessage = 'sys.api.errMsg501';
      break;
    case 502:
      errMessage = 'sys.api.errMsg502';
      break;
    case 503:
      errMessage = 'sys.api.errMsg503';
      break;
    case 504:
      errMessage = 'sys.api.errMsg504';
      break;
    case 505:
      errMessage = 'sys.api.errMsg505';
      break;
    default:
  }

  if (errMessage) {
    console.error(`global_error_message_status_${status},content: ${errMessage}`)
  }
}
