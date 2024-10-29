import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {StackParamList} from '../navigation/StackNavigator';
import {DrawerParamList} from '../navigation/DrawerNavigator';

type CombinedParamList = StackParamList & DrawerParamList;

export function useTypedNavigation<
  RouteName extends keyof CombinedParamList,
>() {
  return useNavigation<
    | NativeStackNavigationProp<CombinedParamList, RouteName>
    | DrawerNavigationProp<CombinedParamList, RouteName>
  >();
}
