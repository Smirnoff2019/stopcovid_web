<?php

namespace App\Http\Controllers\Api\CloudMessaging;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Kreait\Firebase\Messaging as Messaging;
use App\Models\CloudMessage\Notification;

use App\Models\NotificationResult;
use App\Models\MacAddress;

use Exception;
use Validator;

class NotificationsController extends Controller
{

    public function __construct(Messaging $messaging)
    {
        $this->messaging = $messaging;
    }

    public function index(Request $request, $macAddress) {
        
        Validator::make(['macAddress' => $macAddress], [
            'macAddress' => 'string|unique:mac_addresses,mac_address',
        ])->validate();

        $topic = 'default';
        $title = 'Test Notifications From Api Server';
        $message = 'Test notifications from api server body';
        $data = array('macAddress' => $macAddress);

        // Create Cloud Message notification instance
        $messageInstance = Notification::create( $topic, $title, $message, $data )->get();

        // Push Cloud Message notification
        $sendResponse = $this->messaging->send( $messageInstance );

        // Save MAC address from request
        $MacAddress = MacAddress::saveMacAddress( $macAddress );

        // Save Cloud Message notification name from response
        $notificationResult = $MacAddress->addNotificationResult( $sendResponse['name'] );

        return response()->json(array(
            'macAddress' => $MacAddress,
            'notificationResult' => $notificationResult,
            'status' => 'success'
        ));
    }

}
