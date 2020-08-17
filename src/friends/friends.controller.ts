import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { FriendsService } from "./friends.service";


@Controller('friends')
export class FriendsController {
    constructor(private readonly friendsService: FriendsService) {}

    @Get('myfriends/:userId')
    getMyFriends(@Param('userId') userId: string) {
        return this.friendsService.getFriends(userId);
    }

    @Get('inreq/:userId')
    getIncomingRequests(@Param('userId') userId: string) {
        return this.friendsService.getInReq(userId);
    }

    @Get('outreq/:userId')
    getOutgoingRequests(@Param('userId') userId: string) {
        return this.friendsService.getOutReq(userId);
    }

    @Post()
    addUser(@Body('name') usName: string, @Body('surname') usSur: string, @Body('outReq') usOutReq: string[], @Body('inReq') usInReq: string[], @Body('friends') usFriends: string[]) {
        const generatedId = this.friendsService.insertUser(usName, usSur, usOutReq, usInReq, usFriends);
        return { id: generatedId };
    }
}