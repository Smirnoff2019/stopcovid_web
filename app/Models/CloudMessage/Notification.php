<?php

namespace App\Models\CloudMessage;

use Kreait\Firebase\Messaging\CloudMessage;
use Kreait\Firebase\Messaging\Notification as CloudMessageNotification;

class Notification
{
    public $notificationInstance;
    public $messageInstance;
    public $result;

    public static function create($topic, $title, $message, $data) {

        $instance = new self();

        $instance->notificationInstance = CloudMessageNotification::create( $title, $message );

        $instance->messageInstance = CloudMessage::withTarget('topic', $topic)
            ->withNotification( $instance->notificationInstance )
            ->withData( $data );

        return $instance;
    }

    public function get() {
        return $this->messageInstance;
    }

}
