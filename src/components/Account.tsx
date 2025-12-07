import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { User, Lock, Mail, Phone, Star, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

export function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPasswordReset, setShowPasswordReset] = useState(false);

  return (
    <div className="space-y-4">
      <Card className="bg-white shadow-xl border-cyan-100">
        <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <User className="w-5 h-5" />
            Account Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 p-4">
          {!isLoggedIn ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center mb-4 shadow-lg">
                <Lock className="w-12 h-12 text-white" />
              </div>
              <p className="text-gray-700 mb-2">Account Locked</p>
              <p className="text-sm text-gray-500 mb-6 text-center px-4">
                Please log in to access your account settings
              </p>
              <Button
                onClick={() => setIsLoggedIn(true)}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-md active:scale-95 touch-manipulation px-8"
              >
                Log In
              </Button>
            </div>
          ) : (
            <ScrollArea className="h-[calc(100vh-200px)]">
              <div className="space-y-4">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-4xl shadow-lg">
                    🎣
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <User className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">Profile Information</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-600">Username</label>
                      <Input
                        type="text"
                        value="AnglePro2024"
                        className="mt-1"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600">Display Name</label>
                      <Input
                        type="text"
                        defaultValue="John Fisher"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Email</span>
                  </div>
                  <Input
                    type="email"
                    defaultValue="john.fisher@example.com"
                  />
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span className="text-sm text-gray-700">Phone Number</span>
                  </div>
                  <Input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                  />
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Lock className="w-5 h-5 text-amber-600" />
                      <span className="text-sm text-gray-700">Password</span>
                    </div>
                  </div>
                  {!showPasswordReset ? (
                    <Button
                      onClick={() => setShowPasswordReset(true)}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white shadow-md active:scale-95 touch-manipulation"
                    >
                      Reset Password
                    </Button>
                  ) : (
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs text-gray-600">Current Password</label>
                        <Input
                          type="password"
                          className="mt-1"
                          placeholder="Enter current password"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600">New Password</label>
                        <Input
                          type="password"
                          className="mt-1"
                          placeholder="Enter new password"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600">Confirm New Password</label>
                        <Input
                          type="password"
                          className="mt-1"
                          placeholder="Confirm new password"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => setShowPasswordReset(false)}
                          className="flex-1 bg-gray-500 hover:bg-gray-600 text-white shadow-md active:scale-95 touch-manipulation"
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={() => setShowPasswordReset(false)}
                          className="flex-1 bg-green-500 hover:bg-green-600 text-white shadow-md active:scale-95 touch-manipulation"
                        >
                          Update
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-purple-600" />
                    <span className="text-sm">Subscription</span>
                  </div>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-600">Plan</span>
                      <span className="text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full">
                        Premium
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-600">Status</span>
                      <span className="text-sm text-green-600">Active</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-600">Renewal Date</span>
                      <span className="text-sm text-gray-800">Jan 15, 2025</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-md active:scale-95 touch-manipulation">
                    Manage Subscription
                  </Button>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <span className="text-sm text-gray-700">Location Preferences</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <label className="text-xs text-gray-600">Default Location</label>
                      <Input
                        type="text"
                        defaultValue="Boston, MA"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white shadow-md active:scale-95 touch-manipulation">
                    Save Changes
                  </Button>
                  <Button
                    onClick={() => setIsLoggedIn(false)}
                    className="w-full bg-red-500 hover:bg-red-600 text-white shadow-md active:scale-95 touch-manipulation"
                  >
                    Log Out
                  </Button>
                </div>
              </div>
            </ScrollArea>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
