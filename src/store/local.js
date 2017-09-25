const localEvent = {
  StorageGetter (key) {
    return JSON.parse(localStorage.getItem(key))
  },
  StorageSetter (key, val) {
    return localStorage.setItem(key, JSON.stringify(val))
  }
}

export default localEvent
