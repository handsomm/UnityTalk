import { useRoute, RouteProp } from '@react-navigation/native';
import { StackParamList } from '../navigation/StackNavigator';
import { DrawerParamList } from '../navigation/DrawerNavigator';

type CombinedParamList = StackParamList & DrawerParamList;

export function useTypedRoute<RouteName extends keyof CombinedParamList>() {
  return useRoute<RouteProp<CombinedParamList, RouteName>>();
}
