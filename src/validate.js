const validate = values => {
  console.log("hogehoge")
  console.log(values.check)
  const errors = {}
  if (values.check !== true) {
    errors.name = '送信する前に確認チェックをしてください'
  }
  return errors
}

export default validate
