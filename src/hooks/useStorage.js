import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const useStorage = (key, initialValue) => {
  const [data, setData] = useState(initialValue);

  const getData = async () => {
    const getValue = await AsyncStorage.getItem(key);
    if (getValue) {
      setData(JSON.parse(getValue));
    }
  };

  useEffect(() => {
    getData();
  }, [key]);

  const storeData = async (objData) => {
    if (objData) {
      setData(objData);
      const values = JSON.stringify(objData);
      await AsyncStorage.setItem(key, values);
    }
  };

  const removeData = async () => {
    await AsyncStorage.removeItem(key);
    setData(null);
  };

  return { data, storeData, removeData };
};

export default useStorage;
