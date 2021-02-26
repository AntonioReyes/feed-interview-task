export interface PostAd {
    id: string
    profile_id: string
    account_id: string
    currency: string
    ad_id: string
}

export interface Action<T extends string> {
    action_type: T
    value: string
}

export interface Insights {
    actions?: Action<
        'landing_page_view' |
        'link_click' |
        'onsite_conversion.post_save' |
        'page_engagement' |
        'post_engagement' |
        'post_reaction' |
        'video_view'
        >[]
    outbound_clicks?: Action<'outbound_click'>[]
    video_thruplay_watched_actions?: Action<'video_view'>[]
    impressions: string
    spend: string
    date_start: string
    date_stop: string
}

export interface AdInsights {
    id: string
    account_id: string
    campaign: {
        id: string
        objective:
            'CONVERSIONS' |
            'LINK_CLICKS' |
            'POST_ENGAGEMENT'
    }
    adset: {
        id: string
        optimization_goal:
            'LANDING_PAGE_VIEWS' |
            'LINK_CLICKS' |
            'OFFSITE_CONVERSIONS' |
            'POST_ENGAGEMENT'
    }
    insights: {
        data: Insights,
    }
}
