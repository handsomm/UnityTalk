package com.unitytalk;

import android.content.Context;
import android.content.SharedPreferences;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import org.json.JSONObject;

public class ThemeModule extends ReactContextBaseJavaModule {
    private static final String THEME_STORAGE_KEY = "selectedTheme";
    private static final String MODE_STORAGE_KEY = "selectedMode";
    private static final String PREFERENCES_FILE = "com.unitytalk.PREFERENCES";

    public ThemeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ThemeModule";
    }

    @ReactMethod
    public void setTheme(String themeName, String mode, Promise promise) {
        try {
            SharedPreferences preferences = getReactApplicationContext().getSharedPreferences(PREFERENCES_FILE, Context.MODE_PRIVATE);
            SharedPreferences.Editor editor = preferences.edit();
            editor.putString(THEME_STORAGE_KEY, themeName);
            editor.putString(MODE_STORAGE_KEY, mode);
            editor.apply();
            promise.resolve(null);
        } catch (Exception e) {
            promise.reject("SET_THEME_ERROR", e);
        }
    }

    @ReactMethod
    public void getTheme(Promise promise) {
        try {
            SharedPreferences preferences = getReactApplicationContext().getSharedPreferences(PREFERENCES_FILE, Context.MODE_PRIVATE);
            String themeName = preferences.getString(THEME_STORAGE_KEY, "basic");
            String mode = preferences.getString(MODE_STORAGE_KEY, "light");
            JSONObject themeObject = new JSONObject();
            themeObject.put("theme", themeName);
            themeObject.put("mode", mode);
            promise.resolve(themeObject.toString());
        } catch (Exception e) {
            promise.reject("GET_THEME_ERROR", e);
        }
    }
}
