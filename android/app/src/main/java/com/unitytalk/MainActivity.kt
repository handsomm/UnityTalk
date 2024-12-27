package com.unitytalk

import android.content.Context
import android.content.SharedPreferences
import android.os.Bundle
import android.util.Log
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.google.firebase.messaging.FirebaseMessaging
import  okhttp3.*
import java.io.IOException

class MainActivity : ReactActivity() {

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
  companion object {
    private const val PREFERENCES_FILE = "com.unitytalk.PREFERENCES"
    private const val FIRST_OPEN_KEY = "isFirstOpen"
  }

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    val sharedPreferences: SharedPreferences = getSharedPreferences(PREFERENCES_FILE, Context.MODE_PRIVATE)
    val isFirstOpen = sharedPreferences.getBoolean(FIRST_OPEN_KEY, true)

    if (isFirstOpen) {
      fetchAndSendFCMToken(sharedPreferences)
    } else {
      Log.d("MainActivity", "This is not the first app open.")
    }
  }

  // Function to fetch and send FCM token to backend
  private fun fetchAndSendFCMToken(sharedPreferences: SharedPreferences) {
    FirebaseMessaging.getInstance().token.addOnCompleteListener { task ->
      if (!task.isSuccessful) {
        Log.w("FCM", "Fetching FCM token failed", task.exception)
        return@addOnCompleteListener
      }

      // Get the FCM token
      val token = task.result
      Log.d("FCM", "FCM Token: $token")

      // Send the token to the backend
      sendTokenToBackend(token)

      // Mark that the app has been opened at least once
      val editor = sharedPreferences.edit()
      editor.putBoolean(FIRST_OPEN_KEY, false)
      editor.apply()
    }
  }

  private fun sendTokenToBackend(token: String) {
    val url = "https://api.soumya.site/notifications/store-fcm-token/"

    val requestBody = FormBody.Builder()
        .add("fcm_token", token)
        .build()

    val request = Request.Builder()
        .url(url)
        .post(requestBody)
        .build()

    val client = OkHttpClient()
    client.newCall(request).enqueue(object : Callback {
      override fun onFailure(call: Call, e: IOException) {
        Log.e("Backend", "Failed to send token to backend", e)
      }

      override fun onResponse(call: Call, response: Response) {
        if (response.isSuccessful) {
          Log.d("Backend", "Token successfully sent to backend")
        } else {
          Log.e("Backend", "Failed to send token, response code: ${response.code}")
        }
      }
    })
  }

  override fun getMainComponentName(): String = "UnityTalk"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
