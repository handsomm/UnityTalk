import { useRoute, RouteProp } from '@react-navigation/native';
import { StackParamList } from '../navigation/StackNavigator';
import { DrawerParamList } from '../navigation/DrawerNavigator';

type RootParamList = {
  HomeDrawer: undefined;
  StackScreens: {
    screen?: keyof StackParamList;
    params?: StackParamList[keyof StackParamList];
  };
};

type CombinedParamList = RootParamList & StackParamList & DrawerParamList;

export function useTypedRoute<RouteName extends keyof CombinedParamList>() {
  return useRoute<RouteProp<CombinedParamList, RouteName>>();
}
